const printNav = (myProjects) => {
    const nav = document.getElementById('nav');
    const addNew = document.createElement('button');
    addNew.textContent = 'New Project';
    addNew.id = 'newproject';
    for (let i = 0; i < myProjects.length; i++){
        let container = document.createElement('div');
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
        nav.appendChild(container);
    }
    nav.appendChild(addNew);
}

const printProject = (project) => {
    const content = document.getElementById('content');
    const addNew = document.createElement('button');
    addNew.textContent = 'New Task';
    addNew.id = 'newtask';
    let container = document.createElement('div');
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
    content.appendChild(addNew);
}

const removeProject = () => {
    const content = document.getElementById('content');
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}

const printProjectForm = () => {
    const nav = document.getElementById('nav');
    const container = document.createElement('div');
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.id = 'addproject';
    container.id = 'projectform'
    let formTitle = document.createElement('h3');
    formTitle.textContent = 'New Project';
    container.appendChild(formTitle);
    let label = document.createElement('label');
    label.textContent = 'Title: '
    let titleInput = document.createElement('input');
    container.appendChild(label);
    container.appendChild(titleInput);
    container.appendChild(addButton);
    container.style.display = "none";
    nav.appendChild(container);
}

    
export { printNav, printProject, removeProject, printProjectForm };