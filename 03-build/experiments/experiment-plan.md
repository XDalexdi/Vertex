
# Experiment Plan

**Team:** Vertex
**Created:** 2025-12-09
**Owner:** Murman Gorgadze, Aleksandre Dididze, Avtandil Ananidze, Demetre Mikeladze, lekso Potskverishvili

---

## Overview

This document contains 3 designed experiments to test our riskiest assumptions.

**Testing Priority:**
1. **C1 (Core Customer)** → Experiment 1 (Smoke Test)
2. **P1 (Problem Severity)** → Experiment 2 (Targeted Interviews)
3. **S1 (Solution Demand)** → Experiment 3 (Prototype Test)

---

## Experiment 1: The Multi-Project Waitlist Smoke Test

### Hypothesis Statement

**We believe that** university students with 3+ active group projects experience coordination pain severe enough that **they will** provide their email to join a waitlist for a unified tool.

**We will know we're right when** 10% or more of the users from our targeted outreach channels (specifically mentioning "3+ projects") sign up for early access.

---

### Riskiest Assumption Being Tested

**Assumption:** C1: We believe that university students managing 3+ group projects simultaneously are our core users.

**Why this is the riskiest:** If this segment isn't interested, the entire market size and pain point are wrong, requiring a major pivot in target customer.

---

### Experiment Method

**Type:**
- [X] Smoke Test (landing page, waitlist)

**What we'll build/do:**
A mobile-friendly landing page for TeamLearn with copy specifically addressing the pain of juggling multiple projects. The only Call to Action (CTA) is an email sign-up for early access. We will drive traffic from university student groups/forums, emphasizing the "3+ project chaos" language.

**Target User:** University students (undergrads/masters) with 3+ active group projects.

**Time required:** 1 week

### Success Criteria & Metrics

**Primary Metric:** Conversion Rate (Signups / Total Visitors)
- Target: 10%
- Why it matters: Validates that the pain is severe enough to compel action.

**Secondary Metrics:**
1. Traffic Source Conversion Rate
2. Bounce Rate (< 50%)

---

## Experiment 2: The Coordination Pain Interview

### Hypothesis Statement

**We believe that** the time wasted switching tools is a greater source of frustration than the features of the individual tools (e.g., better chat).

**We will know we're right when** 75%+ of the students we interview cite 'unified view' or 'tool-switching' as their #1 or #2 pain point in a ranking exercise.

---

### Experiment Method

**Type:**
- [X] Survey/Interview (Quantified questions)

**What we'll build/do:**
Conduct 10-15 structured, 30-minute interviews with students who signed up for the waitlist in Experiment 1. The interview will focus on their current workflow and include a card-sorting or ranking exercise for common pain points.

**Target User:** Waitlist signups from Experiment 1.

**Time required:** 1 week

### Success Criteria & Metrics

**Primary Metric:** Percentage of interviewees who rank 'Tool-Switching/Unified View' as their top two pain points.
- Target: 75%
- Why it matters: Validates the severity and nature of the Problem (P1).

---

## Experiment 3: The 'Group Hub' Usability Test

### Hypothesis Statement

**We believe that** giving students a dedicated, pre-structured 'Group Hub' (combining tasks, files, and chat) will save them time compared to their existing workflow.

**We will know we're right when** 80%+ of test participants complete a common task (e.g., assign and check a task status) in the prototype Hub faster than they do in their current real-world method.

---

### Experiment Method

**Type:**
- [X] Prototype Test (Interactive feature mockup)

**What we'll build/do:**
Build a low-fidelity, clickable prototype (using Figma or InVision) of the core 'Group Hub' feature. Conduct 5-10 remote, unmoderated usability tests, comparing task completion time/clicks against their stated current workflow.

**Target User:** Students currently involved in active group projects.

**Time required:** 2 weeks (Prototype build + testing)

### Success Criteria & Metrics

**Primary Metric:** Task Completion Time & Success Rate
- Target: 80% success rate, 25% faster completion time than baseline.
- Why it matters: Validates the specific Solution (S1) is better than the status quo.

---

## Experiment Sequencing

**Can experiments run in parallel?**
- [ ] Experiments 1 and 2 can run in parallel (Experiment 2 uses leads from Exp 1)
- [ ] Must run sequentially
- [X] Other: **Exp 1 runs first.** Exp 2 and 3 can start using the validated users immediately after Exp 1 provides the target segment.

**Rationale for order:** We must validate the *customer* (Exp 1) first to ensure we interview the right people (Exp 2) and build the prototype for the right users (Exp 3).
