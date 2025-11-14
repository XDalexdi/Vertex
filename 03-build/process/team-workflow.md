
### **Team Homework - Sprint Kickoff Meeting**

# Sprint 1 Kickoff Meeting

**Team:** Vertex  
**Sprint:** 1 - Foundation & Core Sync  
**Date:** Monday, November 10, 2025  
**Time:** 4:00 PM - 4:45 PM  
**Location:** Google Meet - [Link](https://meet.google.com/vertex-sprint1)

---

## Meeting Agenda

### 1. Sprint Overview (5 min)
- Review sprint goal and success criteria
- Confirm team availability and commitments
- Address any immediate blockers

### 2. Task Assignments Review (15 min)
- Each member confirms understanding of their tasks
- Discuss dependencies and handoff points
- Clarify any ambiguous requirements

### 3. Development Setup Verification (10 min)
- All members confirm working development environment
- Discuss any setup issues and solutions
- Verify access to shared resources

### 4. Communication Plan (5 min)
- Daily standup schedule and format
- Emergency communication protocols
- Code review expectations

### 5. Risk Mitigation (5 min)
- Identify potential risks and mitigation plans
- Contingency planning for team availability
- Technical risk assessment

### 6. Q&A and Action Items (5 min)
- Address any remaining questions
- Confirm next steps and immediate actions

---

## Pre-Meeting Preparation

**All team members should:**
- [ ] Complete development environment setup
- [ ] Review assigned tasks in sprint plan
- [ ] Identify any potential blockers or questions
- [ ] Test basic "Hello World" functionality in the stack

---

## Attendance & Roles

| Member | Role | Confirmed |
|--------|------|-----------|
| Murman Gorgadze | Technical Lead | ✅ |
| Aleksandre Dididze | Product Lead | ✅ |
| Demetre Mikeladze | UX/UI Lead | ✅ |
| Lekso Potskhverashvili | Frontend Lead | ✅ |
| Avtandil Ananidze | Research Lead | ✅ |

---

## Sprint Goal Recap

**Primary Objective:** Create a functional web application with user authentication, basic dashboard, and LMS connection framework

**Success Criteria:**
- Users can create accounts and log in securely
- Basic dashboard displays tasks with responsive design
- LMS connection flow implemented with mock data
- All team members have working development environments
- Core architecture documented and deployed to staging

---

## Task Assignment Confirmation

### Murman (18 hours)
- [ ] BE1: Design PostgreSQL schema (3h)
- [ ] BE2: Implement JWT auth with refresh (5h) 
- [ ] BE5: Task schema & API (4h)
- [ ] BE6: LMS service architecture (6h)

**Questions/Blockers:** None identified

### Aleksandre (17 hours)
- [ ] BE3: User registration API (3h)
- [ ] BE4: Session management (3h)
- [ ] BE7: Canvas API integration (5h)
- [ ] T1: Auth API tests (2h)
- [ ] INF2: CI/CD pipeline (4h)

**Questions/Blockers:** Need Canvas API documentation

### Demetre (19 hours)
- [ ] D1: Dashboard wireframes (3h)
- [ ] D2: Design system setup (3h)
- [ ] FE1: Login/register components (4h)
- [ ] FE6: LMS connection UI (4h)

**Questions/Blockers:** Need user flow confirmation

### Lekso (16 hours)
- [ ] FE2: Auth context & hooks (4h)
- [ ] FE3: Dashboard layout (4h)
- [ ] FE5: Mobile optimization (4h)
- [ ] FE7: Mock data display (2h)
- [ ] T2: Frontend auth tests (2h)

**Questions/Blockers:** Testing framework setup

### Avtandil (15 hours)
- [ ] FE4: Task card components (4h)
- [ ] BE8: Mock data service (3h)
- [ ] User testing preparation (8h)

**Questions/Blockers:** Mock data requirements

---

## Development Environment Status

| Member | Setup Status | Issues | Resolution |
|--------|-------------|--------|------------|
| Murman | ✅ Complete | None | - |
| Aleksandre | ✅ Complete | None | - |
| Demetre | ✅ Complete | None | - |
| Lekso | ⚠️ Partial | PostgreSQL connection | Murman to assist |
| Avtandil | ✅ Complete | None | - |

**Action:** Murman will help Lekso with PostgreSQL setup before EOD Monday

---

## Communication Plan

### Daily Standups
- **Time:** 9:30 AM daily (15 minutes)
- **Format:** Google Meet sync
- **Recording:** Yes, for absent members
- **Template:** What I did, what I'll do, blockers

### Emergency Communication
- **Urgent:** WhatsApp group (@ mentions)
- **Code Reviews:** GitHub PR comments within 24 hours
- **Blockers:** Immediate notification to Tech Lead

### Weekly Sync
- **Wednesday Check-in:** 4:00 PM (30 minutes)
- **Friday Demo Prep:** 3:00 PM (45 minutes)

---

## Risk Assessment & Mitigation

### High Priority Risks
1. **LMS API Complexity**
   - **Impact:** Could delay core functionality
   - **Mitigation:** Start with mock data, parallel research
   - **Owner:** Aleksandre

2. **Team Availability Conflicts**
   - **Impact:** Task delays during midterm week
   - **Mitigation:** Clear handoffs, buffer time
   - **Owner:** All members

3. **Mobile Performance Issues**
   - **Impact:** Poor user experience on target devices
   - **Mitigation:** Early testing, performance budgets
   - **Owner:** Lekso

### Medium Priority Risks
1. **Authentication Security**
   - **Owner:** Murman
2. **Database Schema Changes**
   - **Owner:** Murman
3. **Design System Consistency**
   - **Owner:** Demetre

---

## Immediate Action Items

### Before EOD Monday
- [ ] Lekso: Complete PostgreSQL setup (with Murman's help)
- [ ] Aleksandre: Research Canvas API documentation
- [ ] Demetre: Finalize dashboard wireframes
- [ ] All: Push initial code to feature branches

### Week 1 Milestones
- **Tuesday:** Authentication system working
- **Wednesday:** Basic dashboard functional
- **Thursday:** LMS integration started
- **Friday:** Staging deployment ready

---

## Success Metrics for Week 1

### Technical
- [ ] User registration and login working
- [ ] Dashboard displays mock tasks
- [ ] Responsive design on mobile devices
- [ ] Code deployed to staging environment

### Process
- [ ] All team members pushing code daily
- [ ] Code reviews completed within 24 hours
- [ ] Daily standups productive and focused
- [ ] No major blockers unresolved > 4 hours

---

## Q&A Session

### Open Questions
1. **Q:** What's the backup plan if Canvas API access is delayed?
   **A:** We'll use comprehensive mock data and focus on other LMS platforms initially.

2. **Q:** How do we handle database schema changes during development?
   **A:** Use Prisma migrations, coordinate changes through Murman.

3. **Q:** What's the process for adding new dependencies?
   **A:** Discuss in standup, get one approval, document in README.

### Decisions Made
1. ✅ Use mock data for initial development and testing
2. ✅ Daily standups at 9:30 AM sharp
3. ✅ Code reviews required before merging to develop
4. ✅ Friday demos mandatory for all members

---

## Next Steps

### Immediate (Today)
- [ ] All: Start working on assigned tasks
- [ ] Murman: Assist Lekso with database setup
- [ ] Demetre: Share wireframes for feedback

### This Week
- [ ] Wednesday: Mid-sprint check-in
- [ ] Friday: Week 1 demo and retrospective

---

## Meeting Notes

**Key Takeaways:**
- Team is well-prepared and understands assignments
- Development environments mostly ready
- Clear communication plan established
- Risks identified and mitigation plans in place

**Action Items:**
1. Murman to help Lekso with PostgreSQL setup ✅
2. Aleksandre to share Canvas API research by Tuesday ✅
3. Demetre to finalize wireframes by EOD Monday ✅

**Next Meeting:** Daily Standup - Tuesday, November 11, 9:30 AM

---

**Meeting Concluded:** 4:45 PM  
**Participants:** All team members present and engaged  
**Outcome:** Sprint 1 officially launched! 🚀
