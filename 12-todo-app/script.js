let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = () => {
      deleteTask(index);
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  
  if (input.value === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();
