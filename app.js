const taskInput = document.querySelector('.todo__taskInput');
const addTaskBtn = document.querySelector('.todo__taskAddBtn');
const taskContainer = document.querySelector('.todo__taskContainer');

function addTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        alert('Please provide task name!')
    } else {
        const li = document.createElement('li');
        const para = document.createElement('p')
        para.textContent = taskInput.value;
        para.classList.add('todo__singleTaskWrapper');
        li.classList.add('todo__newTask')
        const checkTask = document.createElement('span');
        checkTask.classList.add('todo__checkTask', 'fa-regular', 'fa-circle')
        const remove = document.createElement('span')
        remove.classList.add('todo__removeTaskBtn', 'fa-solid', 'fa-circle-xmark');

        li.appendChild(para)
        li.appendChild(checkTask)
        li.appendChild(remove);
        taskContainer.appendChild(li);
    }

    taskInput.value = '';
    saveTasks();
}

taskContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo__checkTask')) {
        e.target.classList.toggle("fa-circle-check");
        e.target.parentElement.classList.toggle('todo__textThrough');
        saveTasks()


    } else if (e.target.classList.contains('todo__removeTaskBtn')) {
        e.target.parentElement.remove();
        saveTasks()
    }
})

addTaskBtn.addEventListener('click', addTask);

function saveTasks() {
    localStorage.setItem('data', taskContainer.innerHTML);
}


function showTasks() {
    taskContainer.innerHTML = localStorage.getItem('data');
}

showTasks();