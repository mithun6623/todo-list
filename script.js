// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
    const listItem = button.parentNode;
    const taskList = listItem.parentNode;

    // Remove the list item from the task list
    taskList.removeChild(listItem);
}
