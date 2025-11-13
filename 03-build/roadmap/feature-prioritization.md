# Feature Prioritization Matrix

**Team:** Vertex  
**Date:** November 14, 2025  
**Method:** Value vs. Effort Matrix

---

## Scoring Guide

### Value Score (1-5)
- **5 = Critical:** Mentioned by 8+ interviews, high pain intensity
- **4 = High:** Mentioned by 5-7 interviews, significant pain
- **3 = Medium:** Mentioned by 3-4 interviews, moderate pain
- **2 = Low:** Mentioned by 1-2 interviews, minor pain
- **1 = Minimal:** No strong evidence, nice-to-have

### Effort Score (1-5)
- **1 = Trivial:** < 1 day, simple implementation
- **2 = Easy:** 1-2 days, straightforward
- **3 = Medium:** 3-5 days, moderate complexity
- **4 = Hard:** 1-2 weeks, significant complexity
- **5 = Very Hard:** > 2 weeks, requires new skills/tech

---

## All Features with Scores

| ID | Feature | Value | Effort | Score | Quadrant | MVP? |
|----|---------|-------|--------|-------|----------|------|
| F1 | Unified Dashboard | 5 | 2 | 10 | Quick Win | ✅ Yes |
| F2 | Smart Priority Indicators | 4 | 2 | 8 | Quick Win | ✅ Yes |
| F3 | Context-Aware Notifications | 3 | 2 | 6 | Quick Win | ✅ Yes |
| F4 | Automated LMS Sync | 5 | 3 | 6.7 | Strategic | ✅ Yes |
| F5 | Cross-Domain Organization | 4 | 3 | 5.3 | Strategic | ✅ Yes |
| F6 | Team Progress Tracking | 4 | 3 | 5.3 | Strategic | ✅ Yes |
| F7 | Mobile-Responsive Design | 5 | 3 | 6.7 | Strategic | ✅ Yes |
| F8 | Submission Verification | 3 | 2 | 6 | Fill-In | ✅ Yes |
| F9 | Automated Progress Tracking | 4 | 4 | 4 | Strategic | ❌ No |
| F10 | Cultural Calendar Integration | 3 | 4 | 3 | Fill-In | ❌ No |
| F11 | Advanced Analytics | 2 | 5 | 2 | Avoid | ❌ No |
| F12 | Multi-language Support | 3 | 5 | 2.4 | Avoid | ❌ No |

**Score Calculation:** Value ÷ Effort (higher = better priority)

---

## Visual Matrix
     HIGH VALUE
          ↑
╔═════════╦═════════╗
║ F4,F5,F6║ F1,F2,F3║ → Include in MVP
║ F7      ║ F8      ║

**Quick Wins:** F1, F2, F3, F8 → Definitely in MVP  
**Strategic:** F4, F5, F6, F7 → Core MVP features  
**Fill-Ins:** F9, F10 → Post-MVP  
**Avoid:** F11, F12 → Not worth effort for MVP

---

## Feature Details

### F1: Unified Academic Dashboard - MVP: ✅ YES

**Description:** Single dashboard displaying all deadlines from connected systems with visual organization

**Value Justification (Score: 5):**
- Interview #001: "I have to check four different apps every morning just to know what I need to do today"
- Interview #009: "Between LMS, Trello, and Calendar, I feel like I'm managing my tools more than my classes"
- Interview #010: "We have too many apps, and no one knows which one is the source of truth"
- Pattern: 8 out of 10 interviews mentioned tool fragmentation
- Quantified impact: Students waste 2+ hours weekly checking multiple systems

**Effort Justification (Score: 2):**
- Implementation: React components with state management
- Technology: Using familiar React/Chakra UI stack
- Dependencies: None, can start immediately
- Estimated time: 2 days
- Risk: Low, straightforward frontend work

**Prioritization Decision:**
✅ **INCLUDE IN MVP** - Highest value, lowest effort = perfect quick win

---

### F2: Smart Priority Indicators - MVP: ✅ YES

**Description:** Visual priority system (color-coding, urgency indicators) based on due date and task weight

**Value Justification (Score: 4):**
- Interview #001: "I had 3 assignments due within 48 hours. I worked frantically for 8 hours straight"
- Interview #002: "There's no system that understands these aren't comparable tasks"
- Pattern: 7 out of 10 interviews mentioned deadline overwhelm
- Quantified impact: Poor prioritization leads to last-minute work and quality issues

**Effort Justification (Score: 2):**
- Implementation: Frontend logic for priority calculation
- Technology: Simple date comparison and weighting algorithm
- Dependencies: Requires task data structure
- Estimated time: 1.5 days
- Risk: Low, purely visual enhancement

**Prioritization Decision:**
✅ **INCLUDE IN MVP** - High value for minimal effort

---

### F4: Automated LMS Sync Engine - MVP: ✅ YES

**Description:** Automatic deadline extraction and synchronization from university LMS platforms

**Value Justification (Score: 5):**
- Interview #001: "Every Sunday I spend two hours copying deadlines from LMS to Google Calendar to Notion"
- Interview #004: "I have to recheck every tool manually each week"
- Interview #009: "I missed a deadline because the change was buried in LMS announcements"
- Pattern: 9 out of 10 interviews mentioned manual sync as primary pain point
- Quantified impact: 2-3 hours weekly manual overhead

**Effort Justification (Score: 3):**
- Implementation: LMS API integration with fallback scraping
- Technology: Requires learning LMS APIs, rate limiting, error handling
- Dependencies: Authentication system, database schema
- Estimated time: 4-5 days
- Risk: Medium, API reliability varies by institution

**Prioritization Decision:**
✅ **INCLUDE IN MVP** - Core value proposition, worth the medium effort

---

### F9: Automated Progress Tracking - MVP: ❌ NO

**Description:** Automatic status updates based on GitHub commits, LMS submissions, and activity detection

**Value Justification (Score: 4):**
- Interview #003: "My teammates won't use manual update systems"
- Interview #010: "People don't bother updating tasks because it feels like extra work"
- Pattern: 5 out of 10 interviews mentioned manual update resistance
- Quantified impact: Teams lose visibility without consistent manual updates

**Effort Justification (Score: 4):**
- Implementation: Multiple API integrations, activity monitoring, heuristic analysis
- Technology: Complex system with GitHub API, LMS webhooks, pattern detection
- Dependencies: All other systems must be built first
- Estimated time: 8-10 days
- Risk: High, complex integration and reliability challenges

**Prioritization Decision:**
❌ **EXCLUDE FROM MVP** - High effort for secondary benefit, can use manual updates initially

---

## MVP Feature Selection Summary

**Selected Features (7 total):**
1. F1: Unified Dashboard - Quick Win
2. F2: Smart Priority Indicators - Quick Win
3. F3: Context-Aware Notifications - Quick Win
4. F4: Automated LMS Sync - Strategic
5. F5: Cross-Domain Organization - Strategic
6. F6: Team Progress Tracking - Strategic
7. F7: Mobile-Responsive Design - Strategic

**Total Estimated Effort:** 18-20 days  
**Available Time:** 24 days (6 weeks × 4 days/week)  
**Buffer:** 4-6 days for testing, iteration, unexpected issues

---

## Deferred Features

### Post-MVP (Sprint 4+)
- F9: Automated Progress Tracking - Good value but complex implementation
- F10: Cultural Calendar Integration - Important for international students

### Future (After Course)
- F11: Advanced Analytics - Low immediate value
- F12: Multi-language Support - Expansion feature

---

## Feature Dependencies

**Must Build First:**
- Authentication system before LMS integration
- Database schema before any feature development
- Basic dashboard before priority indicators

**Can Build in Parallel:**
- Notifications and mobile design
- Team features and cross-domain organization

---

## Validation Plan

**F1: Unified Dashboard**
- **Metric:** User satisfaction with single-view experience
- **Target:** 90% prefer over checking multiple tools
- **Method:** User testing with task completion timing

**F4: Automated LMS Sync**
- **Metric:** Sync accuracy and time savings
- **Target:** 95% deadline accuracy, 85% time reduction
- **Method:** Comparison of manual vs automated sync times

**F6: Team Progress Tracking**
- **Metric:** Team coordination efficiency
- **Target:** 50% reduction in "status update" messages
- **Method:** Message tracking in team projects

---

## Change Log

| Date | Feature | Change | Reason |
|------|---------|--------|--------|
| 2025-11-07 | F8 | Added to MVP | Strong user feedback about submission anxiety |
| 2025-11-07 | F9 | Removed from MVP | Technical complexity constraint |

---

## Notes & Assumptions

**Assumptions:**
- University LMS APIs are reasonably accessible and documented
- Students have consistent internet access for real-time features
- Team will have 4 productive days per week for development

**Constraints:**
- 6-week timeline limits complex feature development
- Team of 5 developers with mixed experience levels
- Academic environment with competing coursework

**Open Questions:**
- [ ] Which LMS platforms have the most reliable APIs?
- [ ] How to handle universities with custom LMS implementations?
- [ ] What fallback methods work when APIs are unavailable?
