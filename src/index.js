import {createTask, createProject, createProjectList} from './taskChanger';
import {printNav, printProject} from './domChanger';

let newTask = createTask("Do dishes", "People are coming over and they need done.", "Dec 1", "High");
let newTask2 = createTask("Do laundry", "People are coming over and they need done.", "Dec 1", "High");
let newTask3 = createTask("Cleaning", "People are coming over and they need done.", "Dec 1", "High");

let newProject = createProject("Party Prep", newTask, newTask2, newTask3);
let newProject2 = createProject("Party Prep 2", newTask, newTask2, newTask3);


let myProjects = createProjectList(newProject, newProject2)
console.log(newTask);
console.log(newProject);
printNav(myProjects);
printProject(newProject);