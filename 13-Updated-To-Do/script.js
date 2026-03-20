let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

// Display tasks
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
    });

    // Text
    let span = document.createElement("span");
    span.innerText = task.text;
    span.classList.add("task-text");

    if (task.completed) {
      span.classList.add("completed");
    }

    // Actions
    let actions = document.createElement("div");
    actions.classList.add("actions");

    // Edit
    let editBtn = document.createElement("button");
    editBtn.innerText = "✏️";

    editBtn.addEventListener("click", () => {
      let newText = prompt("Edit task:", task.text);
      if (newText) {
        tasks[index].text = newText;
        saveTasks();
      }
    });

    // Delete with animation
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", () => {
      li.classList.add("fade-out");

      setTimeout(() => {
        tasks.splice(index, 1);
        saveTasks();
      }, 300);
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
  });
}

// Add task
function addTask() {
  if (taskInput.value.trim() === "") return;

  tasks.push({
    text: taskInput.value,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
}

// Save + Refresh
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// Events
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Load
displayTasks();
