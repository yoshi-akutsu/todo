const createTask = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};
const createProject = function() {
    const project = [];
    for (let i = 0; i < arguments.length; i++){
        project.push(arguments[i]);
    }
    return project;
}

export { createTask, createProject };
