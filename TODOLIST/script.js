const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="doneBtn">✔</button>
            <button class="deleteBtn">✖</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();

    // Done button
    li.querySelector('.doneBtn').addEventListener('click', () => {
        li.classList.toggle('done');
    });

    // Delete button
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    });
});

// Enter key to add task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
