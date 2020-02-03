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
        addNew.id = 'newproject';
        nav.appendChild(addNew);
        printProjectForm();
    }
    nav.appendChild(navContent);
}
const printProject = (project, init) => {
    const content = document.getElementById('content');
    let container = document.createElement('div');
    container.id = 'current';
    let projectTitle = document.createElement('h1');
    projectTitle.textContent = project.title;
    container.appendChild(projectTitle);
    for (let i = 0; i < project.tasks.length; i++){
        //How do I want to display a task?
        let task = document.createElement('p');
        task.textContent = project.tasks[i].title;
        container.appendChild(task);
    }
    content.appendChild(container);
    if (init === true) {
        const addNew = document.createElement('button');
        addNew.textContent = 'New Task';
        addNew.id = 'newtask';
        content.appendChild(addNew);
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
        let label = document.createElement('label');
        label.textContent = labelText[i];
        let input = document.createElement('input');
        container.appendChild(label);
        container.appendChild(input);
    }
    return container;
}
function makeButton(id, text){
    const button = document.createElement('button');
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
    const form = makeForm('New Task', ['Title: ', 'Description', 'Due Date', 'Priority'], 'taskform');
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