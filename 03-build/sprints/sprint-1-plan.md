# Sprint 1 Plan

**Team:** Vertex  
**Sprint:** 1  
**Dates:** November 10-21, 2025  
**Goal:** Create functional web app with auth, dashboard, and LMS connection framework

---

## Updated Task Breakdown

### Authentication System (Refined - 26 hours total)

**Backend (14 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| BE1 | Design PostgreSQL schema | Murman | 3h | □ | Users, sessions, institutions tables |
| BE2 | Implement JWT auth with refresh | Murman | 5h | □ | Secure token rotation, blacklisting |
| BE3 | User registration API | Aleksandre | 3h | □ | Email validation, password hashing |
| BE4 | Session management | Aleksandre | 3h | □ | Login/logout, security middleware |

**Frontend (8 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| FE1 | Login/register components | Demetre | 4h | □ | Form validation, error states |
| FE2 | Auth context & hooks | Lekso | 4h | □ | Protected routes, auto-login |

**Testing (4 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| T1 | Auth API tests | Aleksandre | 2h | □ | Unit tests, edge cases |
| T2 | Frontend auth tests | Lekso | 2h | □ | Component testing, error handling |

### Dashboard Foundation (Refined - 22 hours total)

**Design (6 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| D1 | Dashboard wireframes | Demetre | 3h | □ | Mobile-first, 3 layout options |
| D2 | Design system setup | Demetre | 3h | □ | Colors, typography, components |

**Frontend (12 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| FE3 | Dashboard layout | Lekso | 4h | □ | Responsive grid, sidebar nav |
| FE4 | Task card components | Avtandil | 4h | □ | Reusable, accessible components |
| FE5 | Mobile optimization | Lekso | 4h | □ | Touch gestures, performance |

**Backend (4 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| BE5 | Task schema & API | Murman | 4h | □ | CRUD operations, validation |

### LMS Integration Framework (Refined - 28 hours total)

**Research & Planning (8 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| R1 | Canvas API research | Murman | 4h | □ | Documentation, rate limits |
| R2 | Moodle/Blackboard analysis | Aleksandre | 4h | □ | API availability, fallbacks |

**Backend (14 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| BE6 | LMS service architecture | Murman | 6h | □ | Strategy pattern for different LMS |
| BE7 | Canvas API integration | Aleksandre | 5h | □ | OAuth flow, data normalization |
| BE8 | Mock data service | Avtandil | 3h | □ | Realistic academic deadlines |

**Frontend (6 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| FE6 | LMS connection UI | Demetre | 4h | □ | OAuth flow, institution selection |
| FE7 | Mock data display | Lekso | 2h | □ | Dashboard integration |

### Infrastructure & Deployment (Refined - 12 hours total)

**Setup (8 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| INF1 | Dev environment setup | Murman | 4h | □ | Docker, dependencies, docs |
| INF2 | CI/CD pipeline | Aleksandre | 4h | □ | GitHub Actions, automated testing |

**Deployment (4 hrs)**
| ID | Task | Owner | Est | Status | Details |
|----|------|-------|-----|--------|---------|
| DEP1 | Staging deployment | Murman | 4h | □ | Vercel + Railway, environment vars |

---

## Updated Team Assignments & Capacity

| Member | Role | Total Hours | Key Tasks |
|--------|------|-------------|-----------|
| Murman | Tech Lead | 18 hrs | BE1, BE2, BE5, BE6, INF1, DEP1 |
| Aleksandre | Product Lead | 17 hrs | BE3, BE4, BE7, T1, INF2 |
| Demetre | UX/UI Lead | 19 hrs | D1, D2, FE1, FE6 |
| Lekso | Frontend Lead | 16 hrs | FE2, FE3, FE5, FE7, T2 |
| Avtandil | Research Lead | 15 hrs | FE4, BE8, user testing prep |

**Total Committed:** 85 hours  
**Buffer:** 15 hours for unexpected issues

---

## New Dependencies Identified

**Critical Path:**
1. Authentication (BE1-BE4) must complete before LMS integration (BE6-BE7)
2. Design system (D2) must complete before frontend components (FE3-FE5)
3. LMS research (R1-R2) should run parallel to authentication development

**Risk Areas:**
- LMS API complexity may require additional research time
- Mobile performance optimization might need extra iteration
- Team coordination across different time zones

---

## Updated Definition of Done

**For Each Task:**
- [ ] Code written and working
- [ ] Unit tests passing (80%+ coverage)
- [ ] Code reviewed by different team member
- [ ] Documentation updated
- [ ] Deployed to staging
- [ ] Mobile responsiveness verified
- [ ] Accessibility requirements met (WCAG 2.1 AA)

**For Sprint Completion:**
- [ ] All MVP user stories testable end-to-end
- [ ] Zero critical bugs in staging
- [ ] Performance: Dashboard loads < 2 seconds
- [ ] Security: No sensitive data exposure
- [ ] Team: All members can demo their work

---

## Blockers & Resolutions

**Identified Blockers:**
1. **LMS API Access** - Some universities require special approval
   - **Resolution:** Start with mock data, apply for API access in parallel

2. **Team Availability** - Different class schedules
   - **Resolution:** Async communication, daily standup recordings

3. **Technical Skill Gaps** - Some team members new to React/Node
   - **Resolution:** Pair programming, knowledge sharing sessions

**Contingency Plan:**
- If LMS integration blocked, focus on manual entry features
- If mobile performance issues, prioritize core functionality
- If team member unavailable, redistribute critical tasks

---

## Success Metrics for Sprint 1

**Technical Metrics:**
- Authentication success rate: 100%
- API response time: < 200ms
- Mobile performance score: > 80/100
- Test coverage: > 80%

**Product Metrics:**
- Users can complete registration in < 2 minutes
- Dashboard loads in < 2 seconds on mobile
- LMS connection flow understandable without instructions
- Zero data loss in sync operations

---

## Updated Sprint Schedule

### Week 1 (Nov 10-14)
**Monday:** Kickoff, environment setup, database design  
**Tuesday:** Auth implementation, design system, LMS research  
**Wednesday:** Dashboard components, API development  
**Thursday:** Integration testing, mobile optimization  
**Friday:** Deployment to staging, week 1 review

### Week 2 (Nov 17-21)  
**Monday:** LMS integration, user testing prep
**Tuesday:** Feature completion, bug fixes
**Wednesday:** Comprehensive testing, performance optimization
**Thursday:** Documentation, final polish
**Friday:** Demo, retrospective, sprint 2 planning

---

**Refined by:** Vertex Team  
**Approval:** All team members confirm understanding of assignments
