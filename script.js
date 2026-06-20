function addTask() {
    const input = document.getElementById("inputTask");

    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = input.value;

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    // Done Button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.onclick = function () {
        taskText.classList.toggle("completed");
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    btnGroup.appendChild(doneBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(btnGroup);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// Enter key support
document.getElementById("inputTask").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});