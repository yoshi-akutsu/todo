import {createTask, createProject, createProjectList, addTask } from './taskChanger';
import {printNav, printProject, removeDisplay, clearForm } from './domChanger';

//example todos
let newTask = createTask("Do dishes", "People are coming over and they need done.", "Dec 1", "High");
let newTask2 = createTask("Do laundry", "People are coming over and they need done.", "Dec 1", "High");
let newTask3 = createTask("Cleaning", "People are coming over and they need done.", "Dec 1", "High");
let newProject = createProject("Party Prep", newTask, newTask2, newTask3);
let newProject2 = createProject("Party Prep 2", newTask, newTask2, newTask3);
let myProjects = createProjectList(newProject, newProject2)

printNav(myProjects, true);
printProject(newProject, true, 0);

const mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
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
    });
});

const config = { attributes: true, childList: true, characterData: true };
mutationObserver.observe(document.getElementById('nav'), config);
mutationObserver.observe(document.getElementById('content'), config);


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
            const projectForm = document.querySelector('#projectform > input');
            let newProject = createProject(projectForm.value, []);
            clearForm('projectform');
            button.parentNode.style.display = 'none';
            const navContent = document.getElementById('navcontent');
            navContent.remove();
            myProjects.push(newProject);
            printNav(myProjects, false);

        }
        if (button.id === 'addtask'){
            const taskForm = document.getElementById('taskform');
            let array = [];
            taskForm.childNodes.forEach(child => {
                if (child.tagName === 'INPUT'){
                    array.push(child.value);
                }
            })
            const thisProject = document.querySelector('#current > h1');
            addTask(myProjects[thisProject.id], createTask(array[0], array[1], array[2], array[3]));
            clearForm('taskform');
            button.parentNode.style.display = 'none';
            removeDisplay('current');
            printProject(myProjects[thisProject.id], false, thisProject.id);
            const navContent = document.getElementById('navcontent');
            navContent.remove();
            printNav(myProjects);
        }
    })
})
