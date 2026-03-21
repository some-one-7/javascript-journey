# Day 14 - Event Delegation

## What I Learned

### 1. Event Delegation
Instead of adding event listeners to each button, we add one event listener to the parent element.

Example:
taskList.addEventListener("click", function(e) {
  console.log(e.target);
});

### 2. e.target
- It tells which element was clicked

### 3. classList.contains()
- Used to check which button is clicked

### 4. data-index
- Custom attribute to track task index

### 5. Benefits of Event Delegation
- Less code
- Better performance
- Works for dynamic elements

## Features Added
- Delete task
- Edit task
- Mark complete (checkbox + double click)
- Task counter
- Enter key support

## Key Concept
"One parent handles all events"
