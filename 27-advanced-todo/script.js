let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

// Add Task
addBtn.addEventListener("click", () => {
  if (!taskInput.value.trim()) return;

  tasks.push({
    text: taskInput.value,
    completed: false
  });

  taskInput.value = "";
  saveAndRender();
});

// Save + Render
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "pending") return !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}" data-index="${index}">
        ${task.text}
      </span>
      <div>
        <button class="toggle" data-index="${index}">✔</button>
        <button class="delete" data-index="${index}">❌</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Event Delegation
taskList.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("toggle")) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRender();
  }

  if (e.target.classList.contains("delete")) {
    tasks.splice(index, 1);
    saveAndRender();
  }
});

// Filter Buttons
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Initial Load
renderTasks();
