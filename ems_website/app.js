const API = "http://localhost:3000";

function qs(sel) {
  return document.querySelector(sel);
}
function el(tag, attrs = {}, children = []) {
  const n = document.createElement(tag);

  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") n.className = v;
    else if (k.startsWith("on") && typeof v === "function")
      n.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== undefined && v !== null) n.setAttribute(k, String(v));
  });

  // ensure children is always an array
  const list = Array.isArray(children) ? children : [children];

  list.flat(Infinity).forEach((c) => {
    if (c === null || c === undefined || c === false) return;
    if (typeof c === "string" || typeof c === "number") {
      n.appendChild(document.createTextNode(String(c)));
    } else if (c instanceof Node) {
      n.appendChild(c);
    } else {
      // fallback to prevent crash
      n.appendChild(document.createTextNode(String(c)));
    }
  });

  return n;
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("session") || "null");
  } catch {
    return null;
  }
}
function setSession(s) {
  localStorage.setItem("session", JSON.stringify(s));
}
function logout() {
  localStorage.removeItem("session");
  location.hash = "#/login";
}

async function api(path, opts = {}) {
  const res = await fetch(API + path, {
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });
  if (!res.ok) {
    let msg = "Request failed";
    try {
      msg = (await res.json()).error || msg;
    } catch {}
    throw new Error(msg);
  }
  return res.json();
}
async function upload(path, formData) {
  const res = await fetch(API + path, { method: "POST", body: formData });
  if (!res.ok) {
    let msg = "Upload failed";
    try {
      msg = (await res.json()).error || msg;
    } catch {}
    throw new Error(msg);
  }
  return res.json();
}

function layout(title, content) {
  const s = getSession();
  return el("div", {}, [
    el("div", { class: "topbar" }, [
      el("div", { class: "brand" }, [
        el("div", { class: "badge" }, ["KIU"]),
        el("div", {}, [title]),
      ]),
      el("div", {}, [
        s
          ? el("span", { class: "sub" }, [`${s.name} • ${s.role}`])
          : el("span", { class: "sub" }, ["Not signed in"]),
        document.createTextNode(" "),
        s
          ? el("button", { class: "btn secondary", onclick: logout }, [
              "Log out",
            ])
          : el("span"),
      ]),
    ]),
    el("div", { class: "container" }, [content]),
  ]);
}

/* -------- Pages -------- */

function LoginPage() {
  const box = el(
    "div",
    { class: "card", style: "max-width:520px;margin:40px auto;" },
    [
      el("h1", {}, ["Register / Sign in"]),
      el("div", { class: "sub" }, [
        "Choose role: student or lecturer. (No passwords in this demo) ✨",
      ]),
      el("div", { class: "label" }, ["Name"]),
      el("input", { class: "input", id: "name", placeholder: "e.g. Murman" }),
      el("div", { class: "label" }, ["Email"]),
      el("input", {
        class: "input",
        id: "email",
        placeholder: "e.g. you@kiu.edu.ge",
      }),
      el("div", { class: "label" }, ["Role"]),
      el("select", { class: "input", id: "role" }, [
        el("option", { value: "student" }, ["Student"]),
        el("option", { value: "lecturer" }, ["Lecturer"]),
      ]),
      el("div", { style: "height:12px" }),
      el(
        "button",
        {
          class: "btn",
          onclick: async () => {
            const name = qs("#name").value.trim();
            const email = qs("#email").value.trim();
            const role = qs("#role").value;
            if (!name || !email) return alert("Fill name + email");
            try {
              await api("/api/register", {
                method: "POST",
                body: JSON.stringify({ name, email, role }),
              });
            } catch (e) {
              // if already exists, allow sign-in anyway
              console.log(e.message);
            }
            setSession({ name, email, role });
            location.hash = "#/dashboard";
          },
        },
        ["Continue"]
      ),
    ]
  );

  return layout("Mini KIU LMS", box);
}

function Dashboard() {
  const tiles = [
    { id: "calendar", label: "Calendar", functional: true },
    { id: "lms", label: "LMS", functional: true, badge: "12" },
    { id: "table", label: "Table", functional: true },
    { id: "personal", label: "Personal Info" },
    { id: "program", label: "Program" },
    { id: "library", label: "Library" },
    { id: "orders", label: "Orders" },
    { id: "studentcard", label: "Student card" },
    { id: "registration", label: "Academic registration" },
  ];

  const grid = el(
    "div",
    { class: "grid" },
    tiles.map((t) => {
      const tile = el(
        "div",
        {
          class: "tile " + (t.functional ? "active" : ""),
          onclick: () => {
            if (!t.functional) return alert("Not implemented in this demo 🙂");
            if (t.id === "calendar") location.hash = "#/calendar";
            if (t.id === "lms") location.hash = "#/lms";
            if (t.id === "table") location.hash = "#/timetable";
          },
        },
        [
          el("div", { class: "icon" }, ["📘"]),
          el("div", {}, [
            el(
              "div",
              {
                style:
                  "display:flex;justify-content:space-between;align-items:center",
              },
              [
                el("div", {}, [t.label]),
                t.badge
                  ? el("span", { class: "badge" }, [t.badge])
                  : el("span"),
              ]
            ),
            el("div", { class: "sub" }, [
              t.functional ? "Functional" : "UI only",
            ]),
          ]),
        ]
      );
      return tile;
    })
  );

  const s = getSession();
  const wrap = el("div", {}, [
    el("h1", {}, [`Hello ${s?.name || ""}`]),
    el("div", { class: "sub" }, ["The site is on development stage 🧪"]),
    el("div", { style: "height:16px" }),
    grid,
    s?.role === "lecturer"
      ? el("div", { style: "margin-top:18px" }, [
          el("div", { class: "card" }, [
            el("h1", {}, ["Lecturer quick panel"]),
            el("div", { class: "sub" }, [
              "Add events/homework/materials & notify enrolled students 📧",
            ]),
            el("div", { style: "height:10px" }),
            el("div", { class: "row" }, [
              el(
                "button",
                { class: "btn", onclick: () => (location.hash = "#/lecturer") },
                ["Open Lecturer Panel"]
              ),
            ]),
          ]),
        ])
      : el("div"),
  ]);

  return layout("Dashboard", wrap);
}

function CalendarPage() {
  const content = el("div", {}, [
    navStrip([
      ["#/calendar", "Calendar", true],
      ["#/lms", "LMS"],
      ["#/timetable", "Table"],
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["Important events"]),
      el("div", { class: "sub" }, [
        "Shows announcements and important updates 📣",
      ]),
      el("div", { style: "height:12px" }),
      el("div", { class: "list", id: "events" }, [
        el("div", { class: "sub" }, ["Loading..."]),
      ]),
    ]),
  ]);

  (async () => {
    const events = await api("/api/events");
    const box = qs("#events");
    box.innerHTML = "";
    if (!events.length) {
      box.appendChild(el("div", { class: "sub" }, ["No events yet."]));
      return;
    }
    events.forEach((e) => {
      box.appendChild(
        el("div", { class: "item" }, [
          el("b", {}, [e.title]),
          el("div", {}, [e.content]),
          el("small", {}, [
            `${new Date(e.createdAt).toLocaleString()} ${
              e.courseId ? "• course: " + e.courseId : ""
            }`,
          ]),
        ])
      );
    });
  })();

  return layout("Calendar", content);
}

function LMSPage() {
  const wrap = el("div", {}, [
    navStrip([
      ["#/calendar", "Calendar"],
      ["#/lms", "LMS", true],
      ["#/timetable", "Table"],
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["My courses"]),
      el("div", { class: "sub" }, ["Choose a subject 📚"]),
      el("div", { style: "height:12px" }),
      el("div", { class: "split", id: "courses" }, [
        el("div", { class: "sub" }, ["Loading..."]),
      ]),
    ]),
  ]);

  (async () => {
    const s = getSession();
    const courses = await api("/api/courses");
    const box = qs("#courses");
    box.innerHTML = "";
    courses.forEach((c) => {
      const card = el(
        "div",
        {
          class: "tile",
          onclick: async () => {
            // auto-enroll student for demo
            if (s?.role === "student") {
              await api("/api/enroll", {
                method: "POST",
                body: JSON.stringify({ email: s.email, courseId: c.id }),
              });
            }
            location.hash = `#/course/${c.id}`;
          },
        },
        [
          el("div", { class: "icon" }, ["🎓"]),
          el("div", {}, [
            el("div", {}, [c.title]),
            el("div", { class: "sub" }, ["Open course"]),
          ]),
        ]
      );
      box.appendChild(card);
    });
  })();

  return layout("LMS", wrap);
}

function CourseChoosePage(courseId) {
  const wrap = el("div", {}, [
    el("button", { class: "btn secondary", onclick: () => history.back() }, [
      "← Back",
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["Choose channel"]),
      el("div", { class: "sub" }, ["Lecture or Seminar"]),
      el("div", { style: "height:12px" }),
      el("div", { class: "split" }, [
        el(
          "div",
          {
            class: "tile active",
            onclick: () => (location.hash = `#/course/${courseId}/lecture`),
          },
          [
            el("div", { class: "icon" }, ["📖"]),
            el("div", {}, ["Lecture materials"]),
          ]
        ),
        el(
          "div",
          {
            class: "tile active",
            onclick: () => (location.hash = `#/course/${courseId}/seminar`),
          },
          [
            el("div", { class: "icon" }, ["🧪"]),
            el("div", {}, ["Seminar materials"]),
          ]
        ),
      ]),
    ]),
  ]);
  return layout("Course", wrap);
}

function CourseTabsPage(courseId, kind) {
  const base = `#/course/${courseId}/${kind}`;
  const wrap = el("div", {}, [
    el("button", { class: "btn secondary", onclick: () => history.back() }, [
      "← Back",
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "navstrip" }, [
      el("a", { href: `${base}/interaction`, class: "active" }, [
        "Interaction",
      ]),
      el("a", { href: `${base}/workspace` }, ["Workspace"]),
      el("a", { href: `${base}/materials` }, ["Materials"]),
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, [`${kind.toUpperCase()} • Interaction (demo)`]),
      el("div", { class: "sub" }, [
        "General chat where everyone can write. (Stored locally in your browser) 💬",
      ]),
      el("div", { style: "height:12px" }),
      el("textarea", {
        class: "input",
        id: "chatText",
        rows: "4",
        placeholder: "Write message...",
      }),
      el("div", { style: "height:8px" }),
      el(
        "button",
        {
          class: "btn",
          onclick: () => {
            const key = `chat_${courseId}_${kind}`;
            const list = JSON.parse(localStorage.getItem(key) || "[]");
            list.push({
              at: new Date().toISOString(),
              text: qs("#chatText").value,
            });
            localStorage.setItem(key, JSON.stringify(list));
            qs("#chatText").value = "";
            renderChat();
          },
        },
        ["Send"]
      ),
      el("div", { style: "height:12px" }),
      el("div", { class: "list", id: "chatList" }, []),
    ]),
  ]);

  function renderChat() {
    const key = `chat_${courseId}_${kind}`;
    const list = JSON.parse(localStorage.getItem(key) || "[]").reverse();
    const box = qs("#chatList");
    box.innerHTML = "";
    if (!list.length)
      box.appendChild(el("div", { class: "sub" }, ["No messages yet."]));
    list.forEach((m) => {
      box.appendChild(
        el("div", { class: "item" }, [
          el("div", {}, [m.text]),
          el("small", {}, [new Date(m.at).toLocaleString()]),
        ])
      );
    });
  }
  setTimeout(renderChat, 0);

  return layout("Course Interaction", wrap);
}

function CourseWorkspacePage(courseId, kind) {
  const s = getSession();
  const wrap = el("div", {}, [
    el("button", { class: "btn secondary", onclick: () => history.back() }, [
      "← Back",
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "navstrip" }, [
      el("a", { href: `#/course/${courseId}/${kind}/interaction` }, [
        "Interaction",
      ]),
      el(
        "a",
        { href: `#/course/${courseId}/${kind}/workspace`, class: "active" },
        ["Workspace"]
      ),
      el("a", { href: `#/course/${courseId}/${kind}/materials` }, [
        "Materials",
      ]),
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["Workspace"]),
      el("div", { class: "sub" }, [
        "Students can upload homework here (demo uploads to server). 📤",
      ]),
      el("div", { style: "height:12px" }),
      el("div", { class: "label" }, ["Homework title"]),
      el("input", { class: "input", id: "hwTitle", placeholder: "e.g. CP2" }),
      el("div", { class: "label" }, ["File"]),
      el("input", { class: "input", id: "hwFile", type: "file" }),
      el("div", { style: "height:10px" }),
      el(
        "button",
        {
          class: "btn",
          onclick: async () => {
            const f = qs("#hwFile").files[0];
            const title = qs("#hwTitle").value.trim();
            if (!f || !title) return alert("Pick file + title");
            const fd = new FormData();
            fd.append("file", f);
            fd.append("courseId", courseId);
            fd.append("title", title);
            try {
              await upload("/api/upload/assignment", fd);
              alert("Uploaded ✅");
            } catch (e) {
              alert(e.message);
            }
          },
        },
        ["Upload homework"]
      ),
      el("div", { style: "height:14px" }),
      el("div", { class: "sub" }, [`Signed in as: ${s?.email || "?"}`]),
    ]),
  ]);
  return layout("Workspace", wrap);
}
function CourseMaterialsPage(courseId, kind) {
  const s = getSession();

  const wrap = el("div", {}, [
    el("button", { class: "btn secondary", onclick: () => history.back() }, [
      "← Back",
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "navstrip" }, [
      el("a", { href: `#/course/${courseId}/${kind}/interaction` }, [
        "Interaction",
      ]),
      el("a", { href: `#/course/${courseId}/${kind}/workspace` }, [
        "Workspace",
      ]),
      el(
        "a",
        { href: `#/course/${courseId}/${kind}/materials`, class: "active" },
        ["Materials"]
      ),
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["Materials"]),
      el("div", { class: "sub" }, [
        "Download lecture/seminar files. Lecturers can upload. 📚⬇️",
      ]),
      el("div", { style: "height:12px" }),

      s?.role === "lecturer"
        ? el("div", { class: "item" }, [
            el("b", {}, ["Lecturer upload"]),
            el("div", { class: "label" }, ["File"]),
            el("input", { class: "input", id: "matFile", type: "file" }),
            el("div", { style: "height:10px" }),
            el(
              "button",
              {
                class: "btn",
                onclick: async () => {
                  const f = qs("#matFile")?.files?.[0];
                  if (!f) return alert("Pick a file");

                  const fd = new FormData();
                  fd.append("file", f);
                  fd.append("courseId", courseId); // "db1" or "pdsd"
                  fd.append("kind", kind); // "lecture" or "seminar"

                  try {
                    await upload("/api/upload/material", fd);
                    alert("Uploaded ✅ (emails sent if SMTP configured)");
                    await loadMaterials();
                  } catch (e) {
                    alert(e.message || "Upload failed");
                  }
                },
              },
              ["Upload material"]
            ),
          ])
        : el("div"),

      el("div", { style: "height:12px" }),
      el("div", { class: "list", id: "matList" }, [
        el("div", { class: "sub" }, ["Loading..."]),
      ]),
    ]),
  ]);

  async function loadMaterials() {
    const box = qs("#matList");
    box.innerHTML = "";
    box.appendChild(el("div", { class: "sub" }, ["Loading..."]));

    let all = [];
    try {
      all = await api("/api/materials");
    } catch (e) {
      box.innerHTML = "";
      box.appendChild(
        el("div", { class: "sub" }, [
          "Failed to load materials. Make sure your server has GET /api/materials.",
        ])
      );
      return;
    }

    const list = all.filter((m) => m.courseId === courseId && m.kind === kind);

    box.innerHTML = "";
    if (!list.length) {
      box.appendChild(el("div", { class: "sub" }, ["No materials yet."]));
      return;
    }

    list.forEach((m) => {
      const displayName = m.originalName || m.original || m.filename;

      // ✅ IMPORTANT: new download route needs courseId + kind + filename
      const downloadUrl = `/download/material/${courseId}/${kind}/${m.filename}`;

      box.appendChild(
        el("div", { class: "item" }, [
          el("b", {}, [displayName]),
          el("div", {}, [el("a", { href: downloadUrl }, ["Download"])]),
          el("small", {}, [new Date(m.createdAt).toLocaleString()]),
        ])
      );
    });
  }

  setTimeout(loadMaterials, 0);
  return layout("Materials", wrap);
}

function TimetablePage() {
  const wrap = el("div", {}, [
    navStrip([
      ["#/calendar", "Calendar"],
      ["#/lms", "LMS"],
      ["#/timetable", "Table", true],
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["Timetable"]),
      el("div", { class: "sub" }, ["Weekly schedule (demo) 🗓️"]),
      el("div", { style: "height:12px" }),
      el("div", { class: "list", id: "tt" }, [
        el("div", { class: "sub" }, ["Loading..."]),
      ]),
    ]),
  ]);

  (async () => {
    const courses = await api("/api/courses");
    const byId = Object.fromEntries(courses.map((c) => [c.id, c.title]));
    const tt = await api("/api/timetable");
    const box = qs("#tt");
    box.innerHTML = "";
    tt.forEach((t) => {
      box.appendChild(
        el("div", { class: "item" }, [
          el("b", {}, [`${t.day} • ${t.time}`]),
          el("div", {}, [`${byId[t.courseId] || t.courseId} • ${t.type}`]),
          el("small", {}, [t.room || ""]),
        ])
      );
    });
  })();

  return layout("Timetable", wrap);
}

function LecturerPanel() {
  const s = getSession();
  if (!s || s.role !== "lecturer")
    return layout(
      "Access denied",
      el("div", { class: "card" }, ["Lecturer only."])
    );

  const wrap = el("div", {}, [
    el("button", { class: "btn secondary", onclick: () => history.back() }, [
      "← Back",
    ]),
    el("div", { style: "height:14px" }),
    el("div", { class: "card" }, [
      el("h1", {}, ["Lecturer Panel"]),
      el("div", { class: "sub" }, [
        "Add events, upload homework/materials, edit timetable. Emails send automatically when SMTP is configured 📧",
      ]),
    ]),
    el("div", { style: "height:14px" }),

    el("div", { class: "split" }, [
      // Event
      el("div", { class: "card" }, [
        el("b", {}, ["Add Event (Calendar)"]),
        el("div", { class: "label" }, ["Course"]),
        el("select", { class: "input", id: "evCourse" }, [
          el("option", { value: "pdsd" }, ["PD for SE"]),
          el("option", { value: "db1" }, ["Databases 1"]),
        ]),
        el("div", { class: "label" }, ["Title"]),
        el("input", {
          class: "input",
          id: "evTitle",
          placeholder: "e.g. Midterm schedule updated",
        }),
        el("div", { class: "label" }, ["Content"]),
        el("textarea", {
          class: "input",
          id: "evContent",
          rows: "4",
          placeholder: "Details...",
        }),
        el("div", { style: "height:10px" }),
        el(
          "button",
          {
            class: "btn",
            onclick: async () => {
              const courseId = qs("#evCourse").value;
              const title = qs("#evTitle").value.trim();
              const content = qs("#evContent").value.trim();
              if (!title || !content) return alert("Fill title + content");
              await api("/api/events", {
                method: "POST",
                body: JSON.stringify({ courseId, title, content }),
              });
              alert("Event posted ✅");
            },
          },
          ["Post event"]
        ),
      ]),
      // Timetable simple note
      el("div", { class: "card" }, [
        el("b", {}, ["Timetable edit"]),
        el("div", { class: "sub" }, [
          "For simplicity, timetable editing is via metadata.json in this starter. We can add a full UI next. 🙂",
        ]),
        el("div", { style: "height:10px" }),
        el(
          "button",
          {
            class: "btn secondary",
            onclick: () => (location.hash = "#/timetable"),
          },
          ["View timetable"]
        ),
      ]),
    ]),
  ]);

  return layout("Lecturer", wrap);
}

/* -------- UI Helpers -------- */
function navStrip(items) {
  // items: [href,label,active]
  return el(
    "div",
    { class: "navstrip" },
    items.map(([href, label, active]) =>
      el("a", { href, class: active ? "active" : "" }, [label])
    )
  );
}

/* -------- Router -------- */
function route() {
  const s = getSession();
  const hash = location.hash || "#/login";

  if (!s && hash !== "#/login") return mount(LoginPage());

  const parts = hash.replace("#/", "").split("/");

  if (hash === "#/login") return mount(LoginPage());
  if (hash === "#/dashboard") return mount(Dashboard());
  if (hash === "#/calendar") return mount(CalendarPage());
  if (hash === "#/lms") return mount(LMSPage());
  if (hash === "#/timetable") return mount(TimetablePage());
  if (hash === "#/lecturer") return mount(LecturerPanel());

  if (parts[0] === "course" && parts.length === 2) {
    return mount(CourseChoosePage(parts[1]));
  }
  if (parts[0] === "course" && parts.length === 3) {
    return mount(CourseTabsPage(parts[1], parts[2])); // defaults to interaction page later by clicking
  }
  if (parts[0] === "course" && parts.length === 4) {
    const [_, courseId, kind, tab] = parts;
    if (tab === "interaction") return mount(CourseTabsPage(courseId, kind));
    if (tab === "workspace") return mount(CourseWorkspacePage(courseId, kind));
    if (tab === "materials") return mount(CourseMaterialsPage(courseId, kind));
  }

  // fallback
  location.hash = s ? "#/dashboard" : "#/login";
}

function mount(node) {
  const root = qs("#app");
  root.innerHTML = "";
  root.appendChild(node);
}

window.addEventListener("hashchange", route);
route();
