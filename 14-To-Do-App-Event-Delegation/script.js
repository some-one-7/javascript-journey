let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const taskCount = document.getElementById("taskCount");

// Show tasks
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <input type="checkbox" class="checkbox" data-index="${index}" ${task.completed ? "checked" : ""}>
      <span class="task-text ${task.completed ? "completed" : ""}" data-index="${index}">
        ${task.text}
      </span>
      <div class="actions">
        <button class="edit" data-index="${index}">Edit</button>
        <button class="delete" data-index="${index}">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateCount();
}

// Add task
function addTask() {
  if (taskInput.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({
    text: taskInput.value,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
}

// Save data
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// Update count
function updateCount() {
  taskCount.innerText = `Total Tasks: ${tasks.length}`;
}

// 🔥 Event Delegation (Click)
taskList.addEventListener("click", function (e) {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("delete")) {
    tasks.splice(index, 1);
    saveTasks();
  }

  if (e.target.classList.contains("edit")) {
    let newText = prompt("Edit task:", tasks[index].text);
    if (newText) {
      tasks[index].text = newText;
      saveTasks();
    }
  }
});

// Checkbox change
taskList.addEventListener("change", function (e) {
  if (e.target.classList.contains("checkbox")) {
    const index = e.target.dataset.index;
    tasks[index].completed = e.target.checked;
    saveTasks();
  }
});

// Double click = toggle complete
taskList.addEventListener("dblclick", function (e) {
  if (e.target.classList.contains("task-text")) {
    const index = e.target.dataset.index;
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
  }
});

// Events
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial load
displayTasks();
