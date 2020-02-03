const createTask = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};
const createProject = function(title) {
    const tasks = [];
    for (let i = 1; i < arguments.length; i++){
        tasks.push(arguments[i]);
    }
    return {title, tasks};
}
const addTask = (project, task) => {
    if (!project.tasks) {
        project.tasks = [];
    }
    project.tasks.push(task);

}

const createProjectList = function() {
    const projects = [];
    for (let i = 0; i < arguments.length; i++){
        projects.push(arguments[i]);
    }
    return projects;
}

const initialListen = () => {
    const projects = document.querySelectorAll('.projectdiv');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            removeDisplay('current');
            for (let i = 0; i < myProjects.length; i++){
                if (myProjects[i].title === project.childNodes[0].textContent){
                    printProject(myProjects[i], false, i);
                }
            }  
        });
        project.addEventListener('mouseenter', () => {
            for (let i = 0; i < project.childNodes[1].childNodes.length; i++){
                project.childNodes[1].childNodes[i].style.display = "block";
            }
        });
        project.addEventListener('mouseleave', () => {
            for (let i = 0; i < project.childNodes[1].childNodes.length; i++){
                project.childNodes[1].childNodes[i].style.display = "none";
            }
        });
    });
    
}

export { createTask, createProject, createProjectList, addTask, initialListen };
