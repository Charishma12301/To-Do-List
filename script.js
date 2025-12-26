const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const darkToggle = document.getElementById("darkModeToggle");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}


darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
