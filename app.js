const taskInput = document.querySelector('.todo__taskInput');
const addTaskBtn = document.querySelector('.todo__taskAddBtn');
const taskContainer = document.querySelector('.todo__taskContainer');

function addTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        alert('Please provide task name!')
    } else {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        li.classList.add('todo__newTask')
        const checkTask = document.createElement('span');
        checkTask.classList.add('todo__checkTask', 'fa-regular', 'fa-circle')
        const remove = document.createElement('span')
        remove.classList.add('todo__removeTaskBtn', 'fa-solid', 'fa-circle-xmark');

        li.appendChild(checkTask)
        li.appendChild(remove);
        taskContainer.appendChild(li);
    }

    taskInput.value = '';
}

taskContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo__checkTask')) {
        e.target.classList.toggle("fa-circle-check")
       


    } else if (e.target.classList.contains('todo__removeTaskBtn')) {
        e.target.parentElement.remove();
    }
})


addTaskBtn.addEventListener('click', addTask);

