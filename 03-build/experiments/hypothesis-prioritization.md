
# Hypothesis Prioritization Template

**Team:** Vertex
**Date:** 2025-12-09
**Created By:** Murman Gorgadze, Aleksandre Dididze, Avtandil Ananidze, Demetre Mikeladze, Lekso Potskverishvili

---

## Instructions

1. **Brainstorm** all assumptions (aim for 20+)
2. **Score** each on Impact (1-5) and Confidence (1-5)
3. **Calculate** Risk Score = (6 - Confidence) × Impact
4. **Rank** by risk score
5. **Select** top 3 for testing

---

## Customer Assumptions

> Assumptions about WHO your customers are and HOW they behave

| # | Assumption | Impact | Confidence | Risk Score |
|---|------------------------------------------------------------------------------------------------|--------|------------|------------|
| C1 | We believe that university students managing 3+ group projects simultaneously are our core users. | 5 | 2 | 20 |
| C2 | We believe students will use TeamLearn for *all* project communication, not just task tracking. | 4 | 3 | 12 |
| C3 | We believe professors/TA's will tolerate students using an external tool outside the official LMS. | 3 | 4 | 6 |

---

## Problem Assumptions

> Assumptions about the PROBLEM you're solving

| # | Assumption | Impact | Confidence | Risk Score |
|---|--------------------------------------------------------------------------------------------------|--------|------------|------------|
| P1 | We believe students waste 30+ minutes per week per project switching between communication, file, and task apps. | 4 | 3 | 12 |
| P2 | We believe the fear of missing a critical update is the primary motivation for checking project status. | 5 | 4 | 5 |
| P3 | We believe current tools (like generic chat/file apps) lack the necessary structure for academic projects. | 3 | 5 | 3 |

---

## Solution/Value Assumptions

> Assumptions about the specific VALUE PROP and HOW the solution will work

| # | Assumption | Impact | Confidence | Risk Score |
|---|------------------------------------------------------------------------------------------------|--------|------------|------------|
| S1 | We believe a simple, dedicated 'Group Hub' feature for each project, combining chat, tasks, and files, is the most desired solution. | 5 | 1 | 25 |
| S2 | We believe students will be willing to pay $X/month for TeamLearn after a free trial period. | 3 | 2 | 12 |
| S3 | We believe the ability to quickly generate a project status report for a professor is a must-have feature. | 4 | 3 | 12 |

---

## Top 3 Riskiest Assumptions Selected for Testing

### 🔴 Priority #1: Group Hub Demand (S1)

**Full Statement:** We believe a simple, dedicated 'Group Hub' feature for each project, combining chat, tasks, and files, is the most desired solution.

**Category:** Solution/Value

**Why This is Risky:**
- **Impact if wrong (5):** If the combined 'Group Hub' is not what they want, we've built the wrong core product structure.
- **Confidence level (1):** This is our biggest design bet—low confidence.
- **Risk score: 25**

### 🟠 Priority #2: Core Customer Segment (C1)

**Full Statement:** We believe that university students managing 3+ group projects simultaneously are our core users.

**Category:** Customer

**Why This is Risky:**
- **Impact if wrong (5):** If we target the wrong student (e.g., those with only 1 project), the pain isn't great enough for them to switch.
- **Confidence level (2):** Strong interview signals, but unvalidated at scale.
- **Risk score: 20**

### 🟡 Priority #3: Problem Severity (P1)

**Full Statement:** We believe students waste 30+ minutes per week per project switching between communication, file, and task apps.

**Category:** Problem

**Why This is Risky:**
- **Impact if wrong (4):** If the time wasted is much less, the pain isn't severe enough to drive adoption.
- **Confidence level (3):** We've heard this anecdotally, but lack quantitative data.
- **Risk score: 12**

---

## Testing Strategy

**Order of Testing:**
1. Test Priority #2 first (Customer) → **Smoke Test**
2. Test Priority #3 second (Problem) → **Survey/Interview**
3. Test Priority #1 third (Solution) → **Prototype Test (MVP)**

**Rationale:** We must confirm *who* our highest-need customer is (C1/P1) before we invest time building the proposed *solution* (S1).
