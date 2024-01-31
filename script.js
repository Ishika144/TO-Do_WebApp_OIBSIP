function addTask() {
    // Get the input value
    var taskText = document.getElementById("inputbox").value;
  
    if (taskText.trim() !== "") {
      // Create new task item
      var taskItem = document.createElement("li");
      taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>
          <button onclick="editTask(this)" class="btn btn-warning btn-sm mr-2">Edit</button>
          <button onclick="deleteTask(this)" class="btn btn-danger btn-sm">Delete</button>
        </span>
      `;
  
      // Append task item to the list
      document.getElementById("task_container").appendChild(taskItem);
  
      // Clear input box
      document.getElementById("inputbox").value = "";
    }
  }
  
  function deleteTask(element) {
    // Remove the parent li element
    element.parentElement.parentElement.remove();
  }
  
  function editTask(element) {
    var taskTextElement = element.parentElement.parentElement.querySelector("span");
    var currentText = taskTextElement.textContent;
  
    var newText = prompt("Edit task:", currentText);
  
    if (newText !== null) {
      // Update the task text
      taskTextElement.textContent = newText;
    }
  }
  