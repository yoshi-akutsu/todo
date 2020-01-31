const printNav = (myProjects) => {
    const nav = document.getElementById('nav');
    for (let i = 0; i < myProjects.length; i++){
        let container = document.createElement('div');
        container.textContent = myProjects[i].title;
        let project = document.createElement('ul');
        for (let j = 0; j < myProjects[i].tasks.length; j++){
            let task = document.createElement('li');
            task.textContent = myProjects[i].tasks[j].title;
            project.appendChild(task);
        }
        container.appendChild(project);
        nav.appendChild(container);
    }
}

const printProject = (project) => {
    const content = document.getElementById("content");
    let container = document.createElement("div");
    let projectTitle = document.createElement("h1");
    projectTitle.textContent = project.title;
    container.appendChild(projectTitle);
    for (let i = 0; i < project.tasks.length; i++){
        //How do I want to display a task?
        let task = document.createElement("p");
        task.textContent = project.tasks[i].title;
        container.appendChild(task);
    }
    content.appendChild(container);
}
    
export { printNav, printProject };