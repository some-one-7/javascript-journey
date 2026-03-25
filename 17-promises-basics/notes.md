# Day 17 - Promises Basics

## 1. What is a Promise?

A Promise is a JavaScript object that represents a future result.

### States:
- Pending ⏳
- Resolved ✅
- Rejected ❌

---

## 2. Creating a Promise

const promise = new Promise((resolve, reject) => {
  // async work
});

---

## 3. resolve & reject

- resolve() → success
- reject() → error

---

## 4. Handling Promises

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

---

## 5. setTimeout inside Promise

Used to simulate async behavior

---

## 6. Promise Chaining

.then() returns a new promise

Example:
promise
  .then(res => res + " step1")
  .then(res => res + " step2")

---

## 7. Real Understanding

Promises help us:
- avoid callback hell
- handle async code cleanly

---

## Final Concept

"Promise = future value (success or failure)"
