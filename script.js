document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value;

    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task)); // Add task text after the checkbox

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
