import {createTask, createProject, createProjectList} from './taskChanger';
import {printNav, printProject, removeProject } from './domChanger';

let newTask = createTask("Do dishes", "People are coming over and they need done.", "Dec 1", "High");
let newTask2 = createTask("Do laundry", "People are coming over and they need done.", "Dec 1", "High");
let newTask3 = createTask("Cleaning", "People are coming over and they need done.", "Dec 1", "High");

let newProject = createProject("Party Prep", newTask, newTask2, newTask3);
let newProject2 = createProject("Party Prep 2", newTask, newTask2, newTask3);

let myProjects = createProjectList(newProject, newProject2)

printNav(myProjects);
printProject(newProject);

const projects = document.querySelectorAll('#nav > div > h5');
projects.forEach(project => {
    project.addEventListener('click', () => {
        removeProject();
        for (let i = 0; i < myProjects.length; i++){
            if (myProjects[i].title === project.textContent){
                printProject(myProjects[i]);
            }
        }
        
    });
});

