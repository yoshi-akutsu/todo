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

export { createTask, createProject, createProjectList, addTask };
