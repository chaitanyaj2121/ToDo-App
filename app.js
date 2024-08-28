let inp = document.querySelector("input");
let addbtn = document.querySelector(".btn-add");
let ul = document.querySelector('ul');

// Adding the task
addbtn.addEventListener('click', (event) => {
    if (inp.value.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    let li = document.createElement('li');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    let completeBtn = document.createElement('button');

    li.innerText = inp.value;
    inp.value = "";

    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    completeBtn.innerText = "Mark as completed";

    // Append buttons to list item
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    // Append list item to the ul
    ul.appendChild(li);

    // Edit button functionality
    editBtn.addEventListener('click', () => {
        let newTask = prompt('Edit your task:', li.firstChild.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            li.firstChild.textContent = newTask;
        }
    });

    // Delete button functionality
    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
    });

    // Mark as completed button functionality
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
});
