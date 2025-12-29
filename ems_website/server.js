import "dotenv/config";
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import multer from "multer";
import nodemailer from "nodemailer";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ---------- PATHS ---------- */
const ROOT = process.cwd();

const DATA_DIR = path.join(ROOT, "data");
const META_PATH = path.join(DATA_DIR, "metadata.json");

const UPLOADS_DIR = path.join(ROOT, "uploads");
const MATERIALS_ROOT = path.join(UPLOADS_DIR, "materials");
const ASSIGNMENTS_ROOT = path.join(UPLOADS_DIR, "assignments");

// temp folder to avoid req.body timing issue in multer destination()
const TEMP_DIR = path.join(UPLOADS_DIR, "_temp");
const TEMP_MATERIALS = path.join(TEMP_DIR, "materials");

/* ---------- HELPERS ---------- */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(DATA_DIR);
ensureDir(UPLOADS_DIR);
ensureDir(MATERIALS_ROOT);
ensureDir(ASSIGNMENTS_ROOT);
ensureDir(TEMP_DIR);
ensureDir(TEMP_MATERIALS);

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function loadMeta() {
  if (!fs.existsSync(META_PATH)) {
    const seed = {
      users: [],
      courses: [
        { id: "pdsd", title: "Product Development for Software Engineers" },
        { id: "db1", title: "Databases 1" },
      ],
      enrollments: {
        pdsd: [],
        db1: [],
      },
      events: [],
      materials: [],
      assignments: [],
      timetable: [
        {
          day: "Monday",
          time: "11:00",
          courseId: "pdsd",
          type: "Workshop",
          room: "A-block Conf Hall",
        },
        {
          day: "Wednesday",
          time: "09:00",
          courseId: "db1",
          type: "Lecture",
          room: "G5 Auditorium",
        },
      ],
    };
    fs.writeFileSync(META_PATH, JSON.stringify(seed, null, 2), "utf-8");
  }
  return JSON.parse(fs.readFileSync(META_PATH, "utf-8"));
}

function saveMeta(meta) {
  fs.writeFileSync(META_PATH, JSON.stringify(meta, null, 2), "utf-8");
}

/* ---------- EMAIL ---------- */
function createMailer() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return { transporter, from: SMTP_FROM };
}

async function notifyCourse(courseId, subject, html) {
  try {
    const mailer = createMailer();

    if (!mailer) {
      console.log(" Email skipped: SMTP not configured. Check .env + restart server.");
      return { ok: false, reason: "smtp_not_configured", sent: 0 };
    }

    const meta = loadMeta();
    const recipients = meta.enrollments?.[courseId] || [];

    console.log("DEBUG notifyCourse:", {
      courseId,
      subject,
      recipientsCount: recipients.length,
      recipients,
      smtpUser: process.env.SMTP_USER,
      smtpHost: process.env.SMTP_HOST,
      smtpPort: process.env.SMTP_PORT,
    });

    if (!recipients.length) {
      console.log(` No recipients enrolled for course "${courseId}"`);
      return { ok: true, reason: "no_recipients", sent: 0 };
    }

    // helpful during debugging SMTP
    await mailer.transporter.verify();

    await mailer.transporter.sendMail({
      from: mailer.from,
      to: mailer.from,
      bcc: recipients,
      subject,
      html,
    });

    console.log(` Email sent to ${recipients.length} students for course ${courseId}`);
    return { ok: true, sent: recipients.length };
  } catch (err) {
    console.log(" Email send failed:", {
      message: err?.message,
      code: err?.code,
      response: err?.response,
    });
    return { ok: false, reason: "send_failed", error: err?.message, sent: 0 };
  }
}

/* ---------- MULTER ---------- */
/**
 * IMPORTANT FIX:
 * For materials we DO NOT use dynamic destination() based on req.body,
 * because req.body may not be ready during destination() callback.
 * So we upload to TEMP and move after multer finishes.
 */
const uploadMaterial = multer({ dest: TEMP_MATERIALS });

// Assignments can stay dynamic because we only need courseId (usually parsed early),
// but to be consistent & safe, we’ll also upload to temp then move.
// (If you want, you can keep your old dynamic assignment storage.)
const uploadAssignment = multer({ dest: path.join(TEMP_DIR, "assignments") });
ensureDir(path.join(TEMP_DIR, "assignments"));

/* ---------- API ---------- */

// Register user (student/lecturer)
app.post("/api/register", (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email || !role) return res.status(400).json({ error: "Missing fields" });

  const meta = loadMeta();
  const exists = meta.users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!exists) {
    meta.users.push({ id: uid(), name, email, role });
    saveMeta(meta);
  }

  res.json({ ok: true });
});

// Courses
app.get("/api/courses", (req, res) => {
  res.json(loadMeta().courses);
});

// Enroll student into course
app.post("/api/enroll", (req, res) => {
  const { email, courseId } = req.body;
  if (!email || !courseId) return res.status(400).json({ error: "Missing email/courseId" });

  const meta = loadMeta();
  if (!meta.enrollments[courseId]) meta.enrollments[courseId] = [];

  if (!meta.enrollments[courseId].includes(email)) {
    meta.enrollments[courseId].push(email);
    saveMeta(meta);
  }

  res.json({ ok: true });
});

// Events
app.get("/api/events", (req, res) => {
  res.json(loadMeta().events.slice().reverse());
});

app.post("/api/events", async (req, res) => {
  const { title, content, courseId } = req.body;
  if (!title || !content || !courseId) {
    return res.status(400).json({ error: "Missing title/content/courseId" });
  }

  const meta = loadMeta();
  const event = {
    id: uid(),
    title,
    content,
    courseId,
    createdAt: new Date().toISOString(),
  };

  meta.events.push(event);
  saveMeta(meta);

  await notifyCourse(
    courseId,
    `New important event: ${title}`,
    `<h3>${title}</h3><p>${content}</p><p><b>Course:</b> ${courseId}</p>`
  );

  res.json({ ok: true, event });
});

// Timetable
app.get("/api/timetable", (req, res) => {
  res.json(loadMeta().timetable);
});

/* ---------- UPLOAD: MATERIALS (FIXED) ---------- */
app.post("/api/upload/material", uploadMaterial.single("file"), async (req, res) => {
  try {
    const { courseId, kind } = req.body; // now safely available
    if (!req.file) return res.status(400).json({ error: "Missing file" });
    if (!courseId || !kind) return res.status(400).json({ error: "Missing courseId or kind" });

    // final folder: uploads/materials/<courseId>/<kind>/
    const finalDir = path.join(MATERIALS_ROOT, courseId, kind);
    ensureDir(finalDir);

    // store nice filename
    const finalName = `${Date.now()}__${req.file.originalname}`;
    const finalPath = path.join(finalDir, finalName);

    // move from temp to final
    fs.renameSync(req.file.path, finalPath);

    const meta = loadMeta();
    const item = {
      id: uid(),
      courseId,
      kind,
      filename: finalName, // IMPORTANT: now filename is finalName
      originalName: req.file.originalname,
      createdAt: new Date().toISOString(),
    };

    meta.materials.push(item);
    saveMeta(meta);

    await notifyCourse(
      courseId,
      `New ${kind} material uploaded`,
      `<p>New <b>${kind}</b> material uploaded for <b>${courseId}</b>:</p><p>${req.file.originalname}</p>`
    );

    res.json({ ok: true, item });
  } catch (err) {
    console.log(" /api/upload/material error:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

/* ---------- UPLOAD: ASSIGNMENTS (SAFE MOVE) ---------- */
app.post("/api/upload/assignment", uploadAssignment.single("file"), async (req, res) => {
  try {
    const { courseId, title } = req.body;
    if (!req.file) return res.status(400).json({ error: "Missing file" });
    if (!courseId || !title) return res.status(400).json({ error: "Missing courseId or title" });

    const finalDir = path.join(ASSIGNMENTS_ROOT, courseId);
    ensureDir(finalDir);

    const finalName = `${Date.now()}__${req.file.originalname}`;
    const finalPath = path.join(finalDir, finalName);

    fs.renameSync(req.file.path, finalPath);

    const meta = loadMeta();
    const item = {
      id: uid(),
      courseId,
      title,
      filename: finalName,
      originalName: req.file.originalname,
      createdAt: new Date().toISOString(),
    };

    meta.assignments.push(item);
    saveMeta(meta);

    await notifyCourse(
      courseId,
      `New homework: ${title}`,
      `<p>New homework for <b>${courseId}</b>:</p><p><b>${title}</b></p><p>File: ${req.file.originalname}</p>`
    );

    res.json({ ok: true, item });
  } catch (err) {
    console.log("❌ /api/upload/assignment error:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

// List materials / assignments
app.get("/api/materials", (req, res) => {
  res.json(loadMeta().materials.slice().reverse());
});

app.get("/api/assignments", (req, res) => {
  res.json(loadMeta().assignments.slice().reverse());
});

/* ---------- DOWNLOAD ROUTES ---------- */
app.get("/download/material/:courseId/:kind/:filename", (req, res) => {
  const { courseId, kind, filename } = req.params;
  const filePath = path.join(MATERIALS_ROOT, courseId, kind, filename);
  if (!fs.existsSync(filePath)) return res.status(404).send("Not found");
  res.download(filePath);
});

app.get("/download/assignment/:courseId/:filename", (req, res) => {
  const { courseId, filename } = req.params;
  const filePath = path.join(ASSIGNMENTS_ROOT, courseId, filename);
  if (!fs.existsSync(filePath)) return res.status(404).send("Not found");
  res.download(filePath);
});

/* ---------- START ---------- */
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
