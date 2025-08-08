// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the HTML elements
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const taskList = document.getElementById('task-list');

    // Add an event listener to the form for when it's submitted
    todoForm.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior (page reload)
        e.preventDefault();

        // Get the task text from the input field, and trim whitespace
        const taskText = todoInput.value.trim();

        // If the input is not empty, add the task
        if (taskText !== '') {
            addTask(taskText);
            // Clear the input field after adding the task
            todoInput.value = '';
            // Set focus back to the input field
            todoInput.focus();
        }
    });

    /**
     * Creates and adds a new task to the list.
     * @param {string} text - The text content for the new task.
     */
    function addTask(text) {
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = text; // Set the text of the list item

        // Create a delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn'; // Assign a class for styling

        // Add an event listener to the delete button
        deleteBtn.addEventListener('click', (e) => {
            // Stop the click event from bubbling up to the li element
            e.stopPropagation();
            // Remove the parent list item (li) from the task list (ul)
            taskList.removeChild(li);
        });

        // Add an event listener to the list item itself
        li.addEventListener('click', () => {
            // Toggle the 'completed' class on the list item
            li.classList.toggle('completed');
        });

        // Append the delete button to the list item
        li.appendChild(deleteBtn);
        // Append the list item to the task list
        taskList.appendChild(li);
    }
});