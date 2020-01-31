import {createTask, createProject} from './taskChanger';

let newTask = createTask("Do dishes", "People are coming over and they need done.", "Dec 1", "High");
let newTask2 = createTask("Do laundry", "People are coming over and they need done.", "Dec 1", "High");
let newTask3 = createTask("Cleaning", "People are coming over and they need done.", "Dec 1", "High");

let newProject = createProject(newTask, newTask2, newTask3);
console.log(newTask);
console.log(newProject);