// ========  SELECT DOM ELEMENTS  ========
const inputBox = document.querySelector(".text");
const addBtn = document.querySelector(".addTask");
const taskList = document.querySelector(".taskLists");


// ========  EVENT LISTENERS  ========
window.addEventListener("DOMContentLoaded", loadTasks); // load previous tasks
addBtn.addEventListener("click", handleAddTask);
taskList.addEventListener("click", handleTaskActions); // handle toggle & delete


// ========  FUNCTION: ADD NEW TASK  ========
function handleAddTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") return; // ignore empty input

  createTaskElement(taskText);
  saveTasks();
  inputBox.value = ""; // clear input box
}


// ========  FUNCTION: CREATE TASK ELEMENT  ========
function createTaskElement(text, isCompleted = false) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="left">
      <span class="un-checked" style="visibility:${isCompleted ? "hidden" : "visible"}">
        <i class='bx bx-circle'></i>
      </span>
      <span class="checked" style="visibility:${isCompleted ? "visible" : "hidden"}">
        <i class='bx bxs-check-circle'></i>
      </span>
      <span class="text" style="text-decoration:${isCompleted ? "line-through" : "none"};
        color:${isCompleted ? "#888" : "#000"}">${text}</span>
    </div>
    <div class="right">
      <span class="delete"><i class='bx bx-trash'></i></span>
    </div>
  `;
  taskList.appendChild(li);
}


// ========  FUNCTION: HANDLE TASK ACTIONS  ========
function handleTaskActions(e) {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.closest(".left")) {
    toggleTask(li); // mark done/undone
  } else if (e.target.closest(".delete")) {
    deleteTask(li); // remove task
  }
}


// ========  FUNCTION: TOGGLE TASK (Complete / Incomplete)  ========
function toggleTask(li) {
  const checked = li.querySelector(".checked");
  const unchecked = li.querySelector(".un-checked");
  const text = li.querySelector(".text");

  const isChecked = checked.style.visibility === "visible";

  if (isChecked) {
    // uncheck task
    checked.style.visibility = "hidden";
    unchecked.style.visibility = "visible";
    text.style.textDecoration = "none";
    text.style.color = "#000";
  } else {
    // mark as checked
    checked.style.visibility = "visible";
    unchecked.style.visibility = "hidden";
    text.style.textDecoration = "line-through";
    text.style.color = "#888";
  }

  saveTasks();
}


function deleteTask(li) {
  li.remove();
  saveTasks();
}


// ========  FUNCTION: SAVE TASKS TO LOCAL STORAGE  ========
function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".taskLists li").forEach((li) => {
    const text = li.querySelector(".text").innerText;
    const isCompleted = li.querySelector(".checked").style.visibility === "visible";
    tasks.push({ text, isCompleted });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ========  FUNCTION: LOAD TASKS FROM LOCAL STORAGE  ========
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((task) => {
    createTaskElement(task.text, task.isCompleted);
  });
}
