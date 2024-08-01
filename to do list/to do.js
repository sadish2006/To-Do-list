document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  

    
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
  
        deleteBtn.addEventListener("click", function() {
          li.remove();
        });
  
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    });
  });
  
