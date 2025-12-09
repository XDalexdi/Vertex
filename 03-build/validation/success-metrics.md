# Success Metrics Template

**Team:** Vertex
**Product:** TeamLearn (LMS for Group Projects)
**Created:** 2025-12-09
**Last Updated:** 2025-12-23

---

## North Star Metric

> The ONE metric that best captures the core value you deliver to customers

**Metric:** **Coordination Time Saved (per active project/user/week)**

**Definition:** Estimated time reduction in task/file/communication switching, measured by fewer external app launches (proxy: high usage of TeamLearn core features vs. baseline survey).

**Why This Metric:** TeamLearn's core value is eliminating the chaos of multi-app coordination. Saving time directly proves this value.

**Target:** 30 minutes saved per active project, per user, per week.

**Timeline:** Achieve target within 6 months of MVP launch.

**Current Baseline:** 0 (Pre-launch)

---

## AARRR Metrics (Pirate Metrics)

### Acquisition

> How do users find you?

**Primary Metric:** Activated Group Projects per Month
- **Definition:** A new project group is created on TeamLearn.
- **Target:** 50 new projects per month
- **Tracking Method:** Database events / Tool: Mixpanel

**Secondary Metrics:**
- Traffic sources: University community groups, word-of-mouth referrals.
- Cost per acquisition: Under $5 per activated project group.

---

### Activation

> Do users have a great first experience?

**Primary Metric:** **"Hub" Completion Rate**
- **Definition:** Percentage of newly created projects that complete the "Aha! Moment" (defined as: 1. Add 3+ team members, 2. Create 5+ tasks, AND 3. Send 10+ chat messages).
- **Target:** 70% of new projects complete Hub Completion within 7 days.
- **Tracking Method:** Tool: Mixpanel/Amplitude (funnel analysis)

---

### Retention

> Do users keep coming back?

**Primary Metric:** **Project 2-Week Engagement**
- **Definition:** Percentage of active users who check their project hub 5+ times per week for two consecutive weeks.
- **Target:** 45%
- **Tracking Method:** WAU (Weekly Active Users) on the core "Hub" page.

---

### Referral

> Do users invite others?

**Primary Metric:** **Group Virality**
- **Definition:** Percentage of projects started by a single user that then invite a non-paying user to start a new, separate project.
- **Target:** 15% of active users invite/refer others
- **Virality Coefficient Goal:** > 0.1 (Meaning every 10 users bring in 1 extra user)

---

### Revenue

> Are you making money? (Later Stage)

**Primary Metric:** **Monthly Recurring Revenue (MRR)**
- **Definition:** Total predictable revenue from active subscriptions per month.
- **Target:** $5,000 MRR
- **Tracking Method:** Stripe

---

## Guardrail Metrics

> Metrics that shouldn't be negatively affected by chasing the North Star

| Metric | Threshold | Reason |
|---|---|---|
| Page Load Time (Hub) | < 3 seconds | Poor performance will kill retention. |
| Crash-free sessions | > 99.9% | Product stability is critical for user trust. |
