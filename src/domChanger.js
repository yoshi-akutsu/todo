const printNav = (myProjects, init) => {
    let navContent = document.createElement('div');
    navContent.id = 'navcontent';
    const nav = document.getElementById('nav'); 
    for (let i = 0; i < myProjects.length; i++){
        let container = document.createElement('div');
        container.classList.add('projectdiv')
        let projectTitle = document.createElement('h5')
        projectTitle.textContent = myProjects[i].title;
        container.appendChild(projectTitle);
        
        let project = document.createElement('ul');
        for (let j = 0; j < myProjects[i].tasks.length; j++){
            let task = document.createElement('li');
            task.style.display = 'none';
            task.textContent = myProjects[i].tasks[j].title;
            project.appendChild(task);
        }
        container.appendChild(project);
        navContent.appendChild(container);
    }
    if (init === true) {
        const header = document.createElement('h3');
        header.textContent = 'My Projects';
        nav.appendChild(header);
        const addNew = document.createElement('button');
        addNew.textContent = 'New Project';
        addNew.classList.add('main');
        addNew.id = 'newproject';
        nav.appendChild(addNew);
        printProjectForm();
    }
    nav.appendChild(navContent);
}

function makeContainer(init) {
    if (init === true){
        let container = document.createElement('div');
        container.id = 'current';
        return container;
    }
    else {
        let container2 = document.getElementById('current');
        return container2;
    }
}

const printProject = (project, init, index) => {
    const content = document.getElementById('content');
    let container = makeContainer(init);
    let projectTitle = document.createElement('h1');
    projectTitle.id = index;
    projectTitle.textContent = project.title;
    container.appendChild(projectTitle);
    for (let i = 0; i < project.tasks.length; i++){
        //Task Display
        let task = document.createElement('div');
        task.classList.add('taskdiv');
        task.id = 'task' + i;
        let taskTitle = document.createElement('h4');
        taskTitle.textContent = project.tasks[i].title;
        if (project.tasks[i].priority === 'high'){
            task.classList.add('high')
        }
        else if (project.tasks[i].priority === 'mid'){
            task.classList.add('mid')
        }
        else {
            task.classList.add('low')
        }
        let description = document.createElement('p');
        description.textContent = project.tasks[i].description;
        let due = document.createElement('p');
        due.textContent = project.tasks[i].dueDate;
        task.appendChild(taskTitle);
        task.appendChild(description);
        task.appendChild(due);
        const deleteTask = document.createElement('button');
        deleteTask.textContent = 'Delete Task';
        deleteTask.classList.add('deletetask');
        task.appendChild(deleteTask);
        container.appendChild(task);
    }
    content.prepend(container);
    if (init === true) {
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('main');
        deleteBtn.textContent = 'Delete Project';
        deleteBtn.id = 'delete';
        const addNew = document.createElement('button');
        addNew.textContent = 'New Task';
        addNew.classList.add('main');
        addNew.id = 'newtask';
        content.appendChild(addNew);
        content.appendChild(deleteBtn);
        printTaskForm();
    }
}
const removeDisplay = (id) => {
    const content = document.getElementById(id);
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}
function makeForm(title, labelText, containerId) {
    const container = document.createElement('div');
    container.id = containerId;
    let formTitle = document.createElement('h5');
    formTitle.textContent = title;
    container.appendChild(formTitle);
    for (let i = 0; i < labelText.length; i++) {
        let breaker = document.createElement('br')
        let label = document.createElement('label');
        label.textContent = labelText[i];
        if (labelText[i] === 'Title: ' || labelText[i] === 'Description: '){
            let input = document.createElement('input');
            container.appendChild(label);
            container.appendChild(input);
            container.appendChild(breaker);
        }
        else if (labelText[i] === 'Priority: '){
            let select = document.createElement('select');
            select.name = 'priority';
            for (let j = 0; j < 3; j++){
                let option = document.createElement('option');
                if (j === 0) {
                    option.textContent = 'High';
                    option.value = 'high';
                }
                if (j === 1) {
                    option.textContent = 'Mid';
                    option.value = 'mid';
                }
                if (j === 2) {
                    option.textContent = 'Low';
                    option.value = 'low';
                }
                select.appendChild(option);
            }
            container.appendChild(label);
            container.appendChild(select);
            container.appendChild(breaker);
        }
        else if (labelText[i] === 'Due Date: '){
            let input = document.createElement('input');
            input.type = 'date';
            container.appendChild(label);
            container.appendChild(input);
            container.appendChild(breaker);
        }
    }
    return container;
}
function makeButton(id, text){
    const button = document.createElement('button');
    button.classList.add('main');
    button.textContent = text;
    button.id = id;
    return button;
}
const printProjectForm = () => {
    const nav = document.getElementById('nav');
    const addButton = makeButton('addbutton', 'Add');
    const form = makeForm('New Project', ['Title: '], 'projectform');
    form.appendChild(addButton);
    form.style.display = 'none';
    nav.appendChild(form);
}

const printTaskForm = () => {
    const content = document.getElementById('content');
    const addButton = makeButton('addtask', 'Add Task');
    const form = makeForm('New Task', ['Title: ', 'Description: ', 'Due Date: ', 'Priority: '], 'taskform');
    form.appendChild(addButton);
    form.style.display = 'none';
    content.appendChild(form);
}
const clearForm = (formid) => {
    const form = document.getElementById(formid);
    form.childNodes.forEach(child => {
        child.value = '';
    })
}
    
export { printNav, printProject, removeDisplay, clearForm };