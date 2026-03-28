# Day 20 - Loading & Error Handling

## 1. Why Loading UI?

When fetching data, it takes time.
We show "Loading..." to improve user experience.

---

## 2. Error Handling

If something goes wrong:
- API fails
- user not found

We show error message.

---

## 3. res.ok

Used to check if response is successful.

Example:
if (!res.ok) {
  throw new Error("User not found");
}

---

## 4. try...catch

Used to catch errors in async/await

---

## 5. UX Improvement

Before:
- blank screen ❌

Now:
- loading indicator ✅
- error message ✅

---

## 6. Key Concepts

- Loading state
- Error state
- Better user experience

---

## Final Understanding

"A good app not only works, it communicates with the user"
