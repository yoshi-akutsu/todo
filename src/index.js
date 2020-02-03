import {createTask, createProject, createProjectList} from './taskChanger';
import {printNav, printProject, removeDisplay, printProjectForm, printTaskForm, clearForm } from './domChanger';

//example todos
let newTask = createTask("Do dishes", "People are coming over and they need done.", "Dec 1", "High");
let newTask2 = createTask("Do laundry", "People are coming over and they need done.", "Dec 1", "High");
let newTask3 = createTask("Cleaning", "People are coming over and they need done.", "Dec 1", "High");
let newProject = createProject("Party Prep", newTask, newTask2, newTask3);
let newProject2 = createProject("Party Prep 2", newTask, newTask2, newTask3);
let myProjects = createProjectList(newProject, newProject2)

printNav(myProjects);
printProject(newProject);
printProjectForm();
printTaskForm();


const projects = document.querySelectorAll('.projectdiv');
projects.forEach(project => {
    project.addEventListener('click', () => {
        removeDisplay('content');
        for (let i = 0; i < myProjects.length; i++){
            if (myProjects[i].title === project.childNodes[0].textContent){
                printProject(myProjects[i]);
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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'newproject') {
            button.nextSibling.style.display = 'block';
        }
        if (button.id === 'newtask') {
            button.nextSibling.style.display = 'block';
        }
        if (button.id === 'addbutton'){
            const projectForm = document.getElementById('projectform');
            myProjects.push(createProject(projectForm.childNodes.forEach(child => child.value)));

            clearForm('projectform');
            button.parentNode.style.display = 'none';
        }
        if (button.id === 'addtask'){
            const taskForm = document.getElementById('taskform');
            let array = [];
            taskForm.childNodes.forEach(child => {
                array.push(child);
            })
            createTask(array[0], array[1], array[2], array[3]);

            clearForm('taskform');
            button.parentNode.style.display = 'none';
        }
    })
})
