# Event Schema Design
Team: Vertex
Date: November 7, 2025
Product: StudyFlow
Version: 1.0 (MVP)

## Core Events (8 total)

### Event 1: User Signup Started
**Event Name:** `user_signup_started`
**When it fires:** User clicks "Sign Up" button
**Why we track it:** Measures top of funnel (Acquisition)

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `signup_method` | enum | Yes | How user is signing up | "email", "google", "microsoft" |
| `referral_source` | string | No | How user found us | "friend", "instagram", "classmate" |

### Event 2: User Signup Completed
**Event Name:** `user_signup_completed`
**When it fires:** User successfully creates account
**Why we track it:** Measures acquisition conversion

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `signup_method` | enum | Yes | Method used to sign up | "email", "google", "microsoft" |
| `time_to_complete` | integer | Yes | Seconds from start to completion | 45, 120 |
| `user_type` | enum | Yes | Type of account | "student", "graduate", "international" |

### Event 3: External Platform Connected
**Event Name:** `platform_connected`
**When it fires:** User successfully connects LMS, Google Calendar, etc.
**Why we track it:** Measures adoption of sync features (core to solving fragmentation)

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `platform_type` | enum | Yes | Type of platform connected | "lms", "google_calendar", "microsoft_teams", "notion" |
| `connection_success` | boolean | Yes | Whether connection worked | true, false |
| `sync_enabled` | boolean | Yes | Whether auto-sync turned on | true, false |

### Event 4: Academic Task Created
**Event Name:** `task_created`
**When it fires:** User adds academic task/deadline
**Why we track it:** Core user action, measures engagement

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `task_type` | enum | Yes | Type of academic task | "assignment", "exam", "project", "meeting" |
| `source` | enum | Yes | How task was added | "manual", "lms_sync", "calendar_sync" |
| `has_deadline` | boolean | Yes | Whether deadline set | true, false |
| `priority` | enum | No | Task priority level | "high", "medium", "low" |

### Event 5: Task Completed
**Event Name:** `task_completed`
**When it fires:** User marks task as done
**Why we track it:** Powers North Star Metric, measures value delivery

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `task_type` | enum | Yes | Type of academic task | "assignment", "exam", "project", "meeting" |
| `completed_early` | boolean | Yes | Whether completed before deadline | true, false |
| `completion_time_minutes` | integer | No | Time spent on task | 45, 120 |
| `was_reminded` | boolean | Yes | Whether reminder was used | true, false |

### Event 6: Deadline Missed
**Event Name:** `deadline_missed`
**When it fires:** Task passes deadline without completion
**Why we track it:** Measures failure cases and improvement opportunities

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `task_type` | enum | Yes | Type of academic task | "assignment", "exam", "project", "meeting" |
| `missed_by_hours` | integer | Yes | How late task was | 2, 24, 48 |
| `had_reminder` | boolean | Yes | Whether reminder was set | true, false |

### Event 7: Weekly Planning Session Completed
**Event Name:** `planning_session_completed`
**When it fires:** User completes weekly planning routine
**Why we track it:** Measures proactive behavior that predicts success

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `session_duration_minutes` | integer | Yes | Time spent planning | 15, 30, 45 |
| `tasks_planned` | integer | Yes | Number of tasks reviewed | 5, 12, 20 |
| `platforms_reviewed` | integer | Yes | Number of systems checked | 1, 3, 5 |

### Event 8: Cross-Platform Conflict Resolved
**Event Name:** `conflict_resolved`
**When it fires:** System detects and user resolves scheduling conflict
**Why we track it:** Measures value of unified system

**Custom Properties:**
| Property Name | Type | Required | Description | Example Values |
|---------------|------|----------|-------------|----------------|
| `conflict_type` | enum | Yes | Type of conflict found | "double_booking", "deadline_conflict", "resource_conflict" |
| `resolution_method` | enum | Yes | How conflict was resolved | "rescheduled", "priority_set", "delegated" |

## Event-to-Metric Mapping
**North Star Metric:** Weekly Successfully Managed Academic Tasks
- Primary event: `task_completed`
- Supporting events: `task_created`, `deadline_missed` (inverse)

**AARRR Funnel:**
- Acquisition: `user_signup_started` → `user_signup_completed`
- Activation: `platform_connected` + `task_created` within 48h
- Retention: `planning_session_completed` weekly
- Referral: (Future) `invite_sent` → `invite_accepted`
