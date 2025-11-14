# Technical Spike: LMS Integration Reliability

**Team:** Vertex  
**Researcher:** Aleksandre Dididze  
**Date:** November 14, 2025  
**Spike Duration:** 45 minutes

---

## Research Question

What is the most reliable approach to extract deadline data from diverse university LMS platforms with varying API quality and availability?

## Background & Context

Based on our interviews, LMS integration is our #1 value proposition but also our highest technical risk. Students from different universities use different systems (Canvas, Moodle, Blackboard, custom implementations) with inconsistent API availability and reliability.

**Key Risk:** If we can't reliably sync deadlines from LMS systems, our core value proposition fails.

---

## Options Evaluated

### Option 1: Official REST APIs Only

**Approach:** Use only official, documented REST APIs provided by each LMS platform

**Proof of Concept Implementation:**
```javascript
// Canvas API example
const getCanvasAssignments = async (apiKey, courseId) => {
  try {
    const response = await fetch(
      `https://university.instructure.com/api/v1/courses/${courseId}/assignments`,
      { headers: { 'Authorization': `Bearer ${apiKey}` } }
    );
    return await response.json();
  } catch (error) {
    console.error('Canvas API failed:', error);
    return null;
  }
};

Pros:

Official supported method

Structured, clean data format

Better performance and efficiency

Compliance with platform terms

Cons:

Inconsistent availability across universities

Rate limiting restrictions (Canvas: 600 requests/10min)

Complex OAuth implementation required

Some universities disable API access entirely

Test Results:

Canvas: ✅ Works well, good documentation

Moodle: ⚠️ API availability varies by institution

Blackboard: ❌ Limited REST API, mostly SOAP

Custom Systems: ❌ No standard API

Success Rate: 65% (works for Canvas, variable for others)
