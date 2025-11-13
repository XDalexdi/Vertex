# User Stories List

**Team:** Vertex  
**Project:** AcademicFlow  
**Created:** November 14, 2025  
**Last Updated:** November 14, 2025

---

## Overview

This document contains all user stories for our product, derived from customer interview insights. Each story is backed by evidence from our discovery phase and directly addresses validated pain points.

**Total User Stories:** 10  
**Interview Citations:** 8 unique interviews referenced

---

## User Stories

### User Story #1: Automated LMS Deadline Sync

**As a** CS undergraduate student managing 6 courses  
**I want to** automatically sync all my deadlines from the university LMS to a central dashboard  
**So that** I don't waste 2+ hours weekly on manual synchronization and miss critical deadline changes

**Interview Evidence:**
- Interview #001: "Every Sunday I spend two hours copying deadlines from LMS to Google Calendar to Notion"
- Interview #009: "I didn't know our project deadline was moved up — the update was buried in LMS announcements"
- Pattern: 8 out of 10 interviews mentioned manual sync overhead

**Acceptance Criteria:**
1. Given I connect my LMS account, when I log in, then I see all my course deadlines automatically populated
2. Given a professor changes a deadline in LMS, when I refresh my dashboard, then I see the updated deadline within 1 hour
3. Given I have multiple courses, when I view my dashboard, then I can see which deadlines came from which courses

**Priority:** High  
**MVP:** Yes  
**Estimated Effort:** Medium (3-5 days)

**Dependencies:**
- User authentication system
- LMS API integration

**Notes:**
Must support University of Georgia LMS and common European systems

---

### User Story #2: Cross-Domain Task Separation

**As a** graduate student balancing research, teaching, and coursework  
**I want to** organize my tasks by domain (research/teaching/courses) with different priority indicators  
**So that** I can make informed decisions when deadlines conflict across different responsibility areas

**Interview Evidence:**
- Interview #002: "I had to choose between preparing a conference paper that could define my career and grading 80 undergraduate assignments"
- Interview #006: "Switching from debugging code for a client to writing a research paper, then mentoring a student—all in one day—leaves me mentally drained"
- Pattern: 5 out of 10 interviews mentioned multi-domain conflicts

**Acceptance Criteria:**
1. Given I have tasks from different domains, when I view my dashboard, then I can filter by domain (research/teaching/courses/personal)
2. Given I'm viewing tasks, when I toggle domain view, then I see color-coded indicators for each domain
3. Given I have a research deadline and teaching deadline on the same day, when I view them, then I can see which has higher stakes consequences

**Priority:** High  
**MVP:** Yes  
**Estimated Effort:** Medium (3-5 days)

**Dependencies:**
- Basic task management system
- User profile with role information

**Notes:**
Different domains may require different notification strategies

---

### User Story #3: Team Progress Transparency

**As a** project team leader coordinating 5 engineering students  
**I want to** see real-time status updates from all team members on their assigned tasks  
**So that** I can identify bottlenecks early and prevent cascade failures without constant messaging

**Interview Evidence:**
- Interview #003: "When one person's deadline slips, it creates a domino effect that ruins everyone's schedule"
- Interview #010: "Half of our deadlines get missed because someone didn't see the message or forgot to update the sheet"
- Pattern: 6 out of 10 interviews mentioned team coordination issues

**Acceptance Criteria:**
1. Given I'm a team leader, when I view our project, then I see all tasks with owner names and completion status
2. Given a teammate updates their task status, when I refresh the view, then I see the update within 5 minutes
3. Given a task is overdue, when I view the project, then I see visual warning indicators and can send automated nudges

**Priority:** High  
**MVP:** Yes  
**Estimated Effort:** Medium (3-5 days)

**Dependencies:**
- User authentication and team management
- Real-time update system

**Notes:**
Should work for both small (3-5) and larger (10+) teams

---

### User Story #4: Context-Aware Notifications

**As an** international student with language and cultural barriers  
**I want to** receive deadline notifications with clear, simple language and cultural context  
**So that** I don't misunderstand critical requirements due to language nuances or unfamiliar academic conventions

**Interview Evidence:**
- Interview #005: "Everything takes twice as long. I have to translate instructions, double-check my understanding"
- Interview #007: "By the end of the day, my brain is tired from constantly translating and second-guessing every email"
- Pattern: 3 out of 10 interviews specifically mentioned language/cultural barriers

**Acceptance Criteria:**
1. Given I'm an international student, when I receive a notification, then it uses simple, clear language with minimal academic jargon
2. Given a deadline has cultural significance (like "reading week" or "midterm break"), when I view it, then I see explanatory context
3. Given I prefer notifications in my native language, when I set my preferences, then I receive translated notifications where possible

**Priority:** Medium  
**MVP:** Yes  
**Estimated Effort:** Small (1-2 days)

**Dependencies:**
- Notification system
- User profile with language preferences

**Notes:**
Start with English clarity, add translation services post-MVP

---

### User Story #5: Mobile Task Management

**As a** commuter student spending 30+ minutes daily on public transport  
**I want to** access and manage my tasks through a mobile-optimized interface  
**So that** I can use travel time productively instead of waiting until I have laptop access

**Interview Evidence:**
- Interview #004: "When I open it on my phone, half the buttons don't even work. It's faster to just open my laptop"
- Interview #008: "On my tablet, it's a disaster. The buttons overlap, and half the pages don't load properly"
- Pattern: 7 out of 10 interviews mentioned mobile accessibility issues

**Acceptance Criteria:**
1. Given I access the dashboard on my phone, when I load the page, then it renders properly on mobile screens
2. Given I'm using touch interface, when I interact with tasks, then all buttons are appropriately sized for touch
3. Given I have limited connectivity, when I view my tasks, then I can see cached versions and sync when reconnected

**Priority:** High  
**MVP:** Yes  
**Estimated Effort:** Medium (3-5 days)

**Dependencies:**
- Responsive design system
- Basic dashboard functionality

**Notes:**
Progressive Web App approach for offline functionality

---

### User Story #6: Submission Verification

**As a** student who has experienced LMS submission failures  
**I want to** receive clear confirmation with timestamps when I submit work through integrated systems  
**So that** I have proof of submission and don't experience grade penalties due to technical issues

**Interview Evidence:**
- Interview #004: "Sometimes the LMS just freezes when I try to upload a file, and I never know if it actually went through"
- Interview #008: "It says 'submission received,' but when I refresh, it's gone. I have to redo the whole thing"
- Pattern: 4 out of 10 interviews mentioned submission anxiety

**Acceptance Criteria:**
1. Given I submit work through the system, when submission completes, then I receive email confirmation with timestamp
2. Given submission fails, when I retry, then I see clear error messages with troubleshooting steps
3. Given I need proof of submission, when I view my submission history, then I can export timestamps and confirmations

**Priority:** Medium  
**MVP:** Yes  
**Estimated Effort:** Small (1-2 days)

**Dependencies:**
- LMS integration
- Email notification system

**Notes:**
Critical for building trust in automated systems

---

### User Story #7: Smart Deadline Prioritization

**As a** student with 10+ concurrent deadlines during midterms  
**I want to** see visual priority indicators based on due date, weight, and preparation time required  
**So that** I can focus on the most critical tasks first and avoid last-minute panic

**Interview Evidence:**
- Interview #001: "I had 3 assignments due within 48 hours. I worked frantically for 8 hours straight and submitted 30 minutes before deadline"
- Interview #009: "Between LMS, Trello, and Calendar, I feel like I'm managing my tools more than my classes"
- Pattern: 9 out of 10 interviews mentioned deadline overwhelm

**Acceptance Criteria:**
1. Given I have multiple deadlines, when I view my dashboard, then I see color-coded priority indicators (red=urgent, yellow=soon, green=later)
2. Given a deadline is worth more than 20% of course grade, when I view it, then I see special weight indicators
3. Given I have both short and long-term deadlines, when I filter by timeframe, then I can focus on immediate vs. future tasks

**Priority:** High  
**MVP:** Yes  
**Estimated Effort:** Medium (3-5 days)

**Dependencies:**
- Task management system
- Grade weight integration

**Notes:**
Algorithm should consider both time sensitivity and academic impact

---

### User Story #8: Automated Progress Tracking

**As a** team member who forgets to update task status manually  
**I want to** have my progress automatically tracked based on activity and integrations  
**So that** my teammates see accurate status without me needing to remember manual updates

**Interview Evidence:**
- Interview #003: "I built a custom dashboard to track everything, but my teammates won't use it. They say it's too complicated"
- Interview #010: "People don't bother updating tasks because they don't see the benefit — it feels like extra work"
- Pattern: 5 out of 10 interviews mentioned manual update resistance

**Acceptance Criteria:**
1. Given I commit code to a connected GitHub repository, when the commit is pushed, then my associated tasks update status automatically
2. Given I submit work through LMS, when submission is confirmed, then the task marks as complete
3. Given I'm inactive on a task nearing deadline, when the system detects no progress, then it sends me a reminder and updates team visibility

**Priority:** Medium  
**MVP:** No (Post-MVP)  
**Estimated Effort:** Large (1-2 weeks)

**Dependencies:**
- GitHub integration
- LMS submission tracking
- Activity monitoring system

**Notes:**
Complex but addresses key adoption barrier

---

### User Story #9: Cultural Calendar Integration

**As an** international student from a different academic calendar system  
**I want to** see deadlines in my familiar date format with holiday explanations  
**So that** I don't misunderstand timing due to format differences or unfamiliar academic breaks

**Interview Evidence:**
- Interview #005: "In German universities, important changes are always written in official announcements, not mentioned casually in lectures"
- Interview #007: "In France, everything is emailed. Here, some teachers post in LMS, some use WhatsApp, some just say it in class"
- Pattern: 3 out of 10 interviews mentioned cultural/system differences

**Acceptance Criteria:**
1. Given I prefer different date formats, when I set my preferences, then all deadlines display in my chosen format (DD/MM/YYYY vs MM/DD/YYYY)
2. Given there's a local academic holiday, when I view deadlines around that time, then I see context about the holiday's significance
3. Given deadlines use unfamiliar terms, when I hover over them, then I see explanations of academic terminology

**Priority:** Low  
**MVP:** No (Future)  
**Estimated Effort:** Medium (3-5 days)

**Dependencies:**
- Internationalization system
- Academic calendar database

**Notes:**
Important for international student satisfaction but not core MVP

---

### User Story #10: Analytics and Insights

**As a** student wanting to improve my time management  
**I want to** see analytics about my deadline performance and time allocation patterns  
**So that** I can identify areas for improvement and optimize my study habits

**Interview Evidence:**
- Interview #002: "There's no system that understands these aren't comparable tasks"
- Interview #006: "My tools don't help me transition; they just remind me of the next deadline"
- Pattern: 4 out of 10 interviews mentioned desire for better self-understanding

**Acceptance Criteria:**
1. Given I complete a semester, when I view analytics, then I see my on-time submission rate across different course types
2. Given I have time tracking enabled, when I review my week, then I see how much time I spent on different domains
3. Given I want to improve, when I view insights, then I receive suggestions based on my patterns and successful peers

**Priority:** Low  
**MVP:** No (Future)  
**Estimated Effort:** Large (1-2 weeks)

**Dependencies:**
- Comprehensive data collection
- Analytics infrastructure

**Notes:**
Advanced feature for user retention and engagement

---

## User Story Mapping

### Epic 1: Core Task Management

**Stories in this epic:**
- User Story #1: Automated LMS Deadline Sync
- User Story #2: Cross-Domain Task Separation
- User Story #7: Smart Deadline Prioritization

**User Journey:** Student connects LMS, sees all deadlines organized by domain with clear priorities, can focus on most important tasks

### Epic 2: Team Collaboration

**Stories in this epic:**
- User Story #3: Team Progress Transparency
- User Story #8: Automated Progress Tracking

**User Journey:** Team leader creates project, assigns tasks, sees real-time progress, identifies bottlenecks without constant communication

### Epic 3: User Experience & Accessibility

**Stories in this epic:**
- User Story #4: Context-Aware Notifications
- User Story #5: Mobile Task Management
- User Story #6: Submission Verification

**User Journey:** Student accesses system on mobile, receives clear notifications, has confidence in submission process

---

## Priority Breakdown

### Must-Have (MVP)
Stories essential for core value proposition:
- User Story #1: Automated LMS Deadline Sync
- User Story #2: Cross-Domain Task Separation
- User Story #3: Team Progress Transparency
- User Story #5: Mobile Task Management
- User Story #7: Smart Deadline Prioritization

### Should-Have (MVP Enhancement)
Important but not critical for initial launch:
- User Story #4: Context-Aware Notifications
- User Story #6: Submission Verification

### Could-Have (Future)
Nice-to-have enhancements:
- User Story #8: Automated Progress Tracking
- User Story #9: Cultural Calendar Integration
- User Story #10: Analytics and Insights

---

## Evidence Summary

### Interview Coverage
- Total interviews conducted: 10
- Unique interviews cited in user stories: 8
- Average citations per story: 2.1

### Top Pain Points Addressed
1. **Manual synchronization overhead:** Addressed by Stories #1, #8
2. **Multi-domain conflicts:** Addressed by Stories #2, #7
3. **Team coordination issues:** Addressed by Stories #3, #8
4. **Mobile accessibility:** Addressed by Story #5
5. **Submission anxiety:** Addressed by Story #6

---

## Validation Plan

**Story #1:**
- Success metric: Reduces manual sync time from 2+ hours to <15 minutes weekly
- Validation method: User testing with time tracking
- Target: 90% of test users report significant time savings

**Story #2:**
- Success metric: Users can correctly prioritize cross-domain deadlines
- Validation method: Scenario-based testing with conflicting deadlines
- Target: 80% of users make optimal prioritization decisions

**Story #3:**
- Success metric: Reduces team coordination messages by 50%
- Validation method: Team project observation and message tracking
- Target: Teams report feeling more coordinated with less communication overhead

---

## Change Log

| Date | Story | Change | Reason |
|------|-------|--------|--------|
| 2025-11-07 | All | Created | Initial stories from interview synthesis |
| 2025-11-07 | #8, #9, #10 | Marked as post-MVP | Scope management for 6-week timeline |

---

## Best Practices Checklist

For each user story, verify:
- [x] Follows template format
- [x] Has specific user type (not generic "user")
- [x] Action is clear and specific
- [x] Benefit is concrete and measurable
- [x] Cites at least 2 interviews with direct quotes
- [x] Acceptance criteria are testable
- [x] Priority assigned based on interview evidence
- [x] Effort estimate is reasonable
- [x] Dependencies are identified
