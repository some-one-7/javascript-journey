# Day 19 - Async/Await

## 1. What is async/await?

A cleaner way to handle Promises.

---

## 2. async keyword

Makes a function return a Promise.

Example:
async function test() {
  return "Hello";
}

---

## 3. await keyword

Waits for a Promise to resolve.

Example:
const res = await fetch(url);

---

## 4. try...catch

Used for error handling

Example:
try {
  let data = await fetch(url);
} catch (error) {
  console.log(error);
}

---

## 5. Comparison

.then() vs async/await

.then():
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));

async/await:
const res = await fetch(url);
const data = await res.json();

---

## 6. Key Concepts

- async → function returns promise
- await → pauses execution
- cleaner and readable code

---

## Final Understanding

"Async/Await makes asynchronous code look synchronous"
