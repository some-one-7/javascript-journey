# Day 18 - Fetch API

## 1. What is Fetch API?

Fetch API is used to get data from the internet (APIs).

---

## 2. Basic Syntax

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));

---

## 3. Steps

1. Call API using fetch()
2. Convert response → JSON
3. Use data

---

## 4. Example API

https://api.github.com/users/{username}

---

## 5. DOM Update

We use innerHTML to show data on screen

---

## 6. Error Handling

.catch(error => console.log(error))

---

## 7. Key Concepts

- Fetch is async
- Returns a Promise
- Data comes in JSON format

---

## Final Understanding

"Fetch API allows us to bring real-world data into our app"
