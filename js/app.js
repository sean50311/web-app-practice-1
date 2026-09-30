let tasks = [];
let currentFilter = 'all';
let taskCount = document.getElementById('task-count');
let activeTaskCount = document.getElementById('active-task-count');
let completedTaskCount = document.getElementById('completed-task-count');

const input = document.getElementById('new-task');
const addButton = document.getElementById('add-task');
const taskListContainer = document.getElementById('task-list-container');

addButton.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
        tasks.push({id: Date.now(), text: task, completed: false});
        renderTasks();
        input.value = '';
    }
});

function renderTasks() {
    taskListContainer.innerHTML = '';
    visibleTasks().forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const span = document.createElement('span');
        span.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '刪除';
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskListContainer.appendChild(li);
    });
    updateTaskCounts();
}
function updateTaskCounts() {
    taskCount.textContent = tasks.length;
    activeTaskCount.textContent = tasks.filter(task => !task.completed).length;
    completedTaskCount.textContent = tasks.filter(task => task.completed).length;
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.getAttribute('data-filter');
        updateFilterButtons();
        renderTasks();
    });
});

const visibleTasks = () => {
    switch (currentFilter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        if (button.getAttribute('data-filter') === currentFilter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

updateFilterButtons();
updateTaskCounts();
