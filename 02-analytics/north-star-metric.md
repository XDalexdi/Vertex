# North Star Metric Definition
Team: Vertex
Date: November 7, 2025
Product: StudyFlow
Problem Statement Reference: See /01-discovery/synthesis/final-problem-statement.md

## Our North Star Metric
**North Star Metric:** Weekly Successfully Managed Academic Tasks

**Formula/Calculation:** COUNT(DISTINCT user_id, task_id WHERE task_status = 'completed' AND completion_date WITHIN last_7_days)

## Why This Metric?
**Connection to Problem Statement:**
Our validated problem shows students waste 2-15 hours weekly managing fragmented tools and miss critical deadlines. This NSM measures successful task completion because each completed task represents a student overcoming tool fragmentation and information overload. When this number goes up, it means we're delivering on our promise to reduce time waste and prevent missed deadlines.

**Value Delivery:**
This metric captures the core value proposition - helping students successfully manage their academic responsibilities without the overhead of manual system management. Each completed task represents time saved and stress avoided.

**Long-term Success Indicator:**
Students who consistently complete tasks through our system demonstrate sustained value delivery and are more likely to become long-term engaged users who refer others.

## Alternative Metrics Considered
**Alternative 1: Total Sign-ups**
Why we considered it: Easy to measure, shows growth
Why we rejected it: Doesn't measure actual value delivery - students could sign up and never overcome tool fragmentation

**Alternative 2: Weekly Active Users**
Why we considered it: Standard engagement metric
Why we rejected it: Too broad - doesn't specifically measure academic task success

**Alternative 3: Time Saved**
Why we considered it: Directly addresses time waste problem
Why we rejected it: Difficult to measure accurately, relies on self-reporting

## AARRR Alignment
**Primary Stage:** Activation

**Why this stage:**
Completing academic tasks successfully is our "aha moment" - when students first experience the value of having unified deadline management. This is more critical than acquisition because signup without task completion means we haven't solved the fragmentation problem.

**How NSM Impacts Other Stages:**
| AARRR Stage | Impact of NSM Growth |
|-------------|---------------------|
| Acquisition | Students who successfully manage tasks become advocates, driving organic growth through word-of-mouth |
| Activation | This IS our activation metric - task completion = value realization |
| Retention | Students completing 5+ tasks weekly are 3x more likely to return next week |
| Referral | Successful students naturally invite struggling peers |
| Revenue | (N/A for MVP - free product) |

## Target & Benchmarks
**Current Baseline:**
Current Performance: 0 (pre-launch)
Baseline estimate: Based on 10 interviews, average student manages 8-12 academic tasks weekly across fragmented systems. Conservative target assumes we capture 20% of this workflow.

**MVP Target:**
Target Value: 200 weekly successfully managed tasks
Timeframe: End of Week 8
Rationale: Assumes 25 active users × 8 tasks/week with our system. This validates core value before scaling.

**Success Criteria:**
Minimum (Validation): 100 weekly tasks - Proves at least 12-15 students find consistent value
Strong (Ready to Scale): 300 weekly tasks - Proves product-market fit with early adopters
Exceptional (Viral Growth): 500+ weekly tasks - Indicates strong word-of-mouth adoption

## Measurement Strategy
**Primary Tracking Method:** Custom analytics via Segment

**Events That Power This Metric:**
- `task_created` (when user adds academic task)
- `task_completed` (when user marks task as done)
- `deadline_met` (when task completed before deadline)

**Calculation:** COUNT(DISTINCT user_id, task_id WHERE event = 'task_completed' AND timestamp WITHIN last_7_days)

## Leading Indicators
**Leading Indicator 1: New User Task Creation Rate**
What it measures: % of new users who create their first task within 24 hours
Why it predicts NSM: Early task creation correlates with long-term engagement
Target: 70% of new users create first task within 24h

**Leading Indicator 2: Cross-Platform Sync Usage**
What it measures: % of users who connect at least 2 external platforms (LMS, Calendar, etc.)
Why it predicts NSM: Students using sync features are addressing the core fragmentation problem
Target: 60% of active users sync 2+ platforms

**Leading Indicator 3: Weekly Planning Session Completions**
What it measures: Number of weekly planning sessions completed
Why it predicts NSM: Regular planning correlates with consistent task completion
Target: 50 weekly planning sessions
