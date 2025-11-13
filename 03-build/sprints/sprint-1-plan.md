# Sprint 1 Plan: Foundation & Core Sync

**Team:** Vertex  
**Sprint:** 1  
**Duration:** 2 weeks  
**Dates:** November 10-21, 2025  
**Sprint Goal:** Create a functional web application with user authentication, basic dashboard, and LMS connection framework

---

## Sprint Overview

### Sprint Goal

In Sprint 1, we'll build the foundational infrastructure for AcademicFlow including user authentication, database setup, basic dashboard interface, and the initial LMS integration framework. This establishes the core architecture that all subsequent features will build upon. We focus on creating a stable foundation with proper error handling and responsive design from day one.

**Success Criteria:**
- [ ] Users can create accounts and log in securely
- [ ] Basic dashboard displays placeholder tasks with responsive design
- [ ] LMS connection flow implemented with mock data
- [ ] All team members have working development environments
- [ ] Core architecture documented and deployed to staging

### Team Capacity

| Member | Role | Available | Committed |
|--------|------|-----------|-----------|
| Murman | Technical Lead | 20 hrs | 18 hrs |
| Aleksandre | Product Lead | 20 hrs | 17 hrs |
| Demetre | UX/UI Lead | 20 hrs | 19 hrs |
| Lekso | Frontend Lead | 20 hrs | 16 hrs |
| Avtandil | Research Lead | 20 hrs | 15 hrs |
| **Total** | | **100 hrs** | **85 hrs** |

---

## User Stories

### User Story #1: User Authentication

As a new student, I want to create an account and log in securely, so that my academic data remains private and personalized to my needs

**Acceptance Criteria:**
1. Given I'm a new user, when I visit the site, then I can create an account with email and password
2. Given I have an account, when I enter correct credentials, then I can log in successfully
3. Given I'm logged in, when I revisit the site, then I remain authenticated across sessions
4. Given authentication fails, when I try to log in, then I see clear error messages

**Tasks:** 8 tasks, 24 hours total

---

## Task Breakdown

### User Story #1 Tasks

**Backend (12 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| BE1 | Design user database schema | Murman | 3h | □ | None |
| BE2 | Implement JWT authentication | Murman | 5h | □ | BE1 |
| BE3 | Create user registration API | Aleksandre | 4h | □ | BE2 |

**Frontend (8 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| FE1 | Create login/register components | Demetre | 4h | □ | None |
| FE2 | Implement auth state management | Lekso | 4h | □ | BE2, FE1 |

**Testing (4 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| T1 | Auth API testing | Aleksandre | 2h | □ | BE3 |
| T2 | Frontend auth testing | Lekso | 2h | □ | FE2 |

### User Story #5: Basic Dashboard

**Design (6 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| D1 | Dashboard wireframes | Demetre | 3h | □ | None |
| D2 | Design system foundation | Demetre | 3h | □ | D1 |

**Frontend (10 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| FE3 | Create dashboard layout | Lekso | 4h | □ | D2 |
| FE4 | Implement task card components | Avtandil | 4h | □ | FE3 |
| FE5 | Add responsive design | Lekso | 2h | □ | FE4 |

**Backend (6 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| BE4 | Task database schema | Murman | 3h | □ | BE1 |
| BE5 | Basic task API endpoints | Aleksandre | 3h | □ | BE4 |

### User Story #1: LMS Connection Framework

**Backend (14 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| BE6 | LMS API research & planning | Murman | 4h | □ | None |
| BE7 | Implement LMS connection service | Aleksandre | 6h | □ | BE6 |
| BE8 | Create mock LMS data for testing | Avtandil | 4h | □ | BE7 |

**Frontend (6 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| FE6 | LMS connection UI flow | Demetre | 4h | □ | FE1 |
| FE7 | Display mock LMS data | Lekso | 2h | □ | FE6, BE8 |

**Infrastructure (8 hrs)**
| ID | Task | Owner | Est | Status | Dependencies |
|----|------|-------|-----|--------|--------------|
| INF1 | Set up development environment | Murman | 4h | □ | None |
| INF2 | Deploy to staging | Aleksandre | 4h | □ | All above |

---

## Sprint Schedule

### Week 1
**Monday:** Sprint kickoff, environment setup, database design  
**Tuesday:** Authentication implementation, dashboard wireframes  
**Wednesday:** Frontend auth components, LMS API research  
**Thursday:** Dashboard development, LMS service implementation  
**Friday:** Integration testing, deployment to staging

### Week 2
**Monday:** LMS connection UI, mock data integration  
**Tuesday:** Responsive design polish, error handling  
**Wednesday:** Comprehensive testing, bug fixes  
**Thursday:** Documentation, final integration  
**Friday:** Demo preparation, retrospective

---

## Daily Standups

**Time:** 9:30 AM  
**Format:** Google Meet (15 minutes sync)

Each member shares:
1. Completed yesterday
2. Working on today
3. Blockers

---

## Definition of Done

A task is DONE when:
- [ ] Code written and working
- [ ] Tests written and passing
- [ ] Code reviewed by at least one team member
- [ ] Merged to main branch
- [ ] Deployed to staging environment
- [ ] Documented if required
- [ ] Demostrable in Friday demo

---

## Risks

1. **LMS API Complexity:** Mitigation: Start with mock data, research APIs in parallel
2. **Authentication Security:** Mitigation: Use proven JWT libraries, security review
3. **Team Coordination:** Mitigation: Daily standups, clear task ownership
4. **Environment Setup Delays:** Mitigation: Document setup process, pair programming

---

## Sprint Burndown

| Day | Date | Remaining Hours |
|-----|------|-----------------|
| 1 | Nov 10 | 85 |
| 2 | Nov 11 | 70 |
| 3 | Nov 12 | 55 |
| 4 | Nov 13 | 40 |
| 5 | Nov 14 | 25 |
| 6 | Nov 17 | 60 |
| 7 | Nov 18 | 45 |
| 8 | Nov 19 | 30 |
| 9 | Nov 20 | 15 |
| 10 | Nov 21 | 0 |

---

## Retrospective (After Sprint)

**Went Well:**
- Clear task breakdown and ownership
- Regular communication through standups
- Good progress on foundation

**Didn't Go Well:**
- Initial environment setup took longer than expected
- Some API research blocked progress

**Action Items:**
- [ ] Create better setup documentation - Owner: Murman
- [ ] Research LMS APIs more thoroughly - Owner: Aleksandre
- [ ] Improve task estimation for complex features - Owner: All

---

