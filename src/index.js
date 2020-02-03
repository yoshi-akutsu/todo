import {createTask, createProject, createProjectList, addTask, initialListen, removeTask } from './taskChanger';
import {printNav, printProject, removeDisplay, clearForm } from './domChanger';

//example todos
let newTask = createTask('Default', 'This is a default task.', '00/00/000', 'mid');
let newProject = createProject('Sample Project', newTask);
let myProjects = createProjectList(newProject)

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

initialListen();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'newproject') {
            button.nextSibling.style.display = 'block';
        }
        if (button.id === 'newtask') {
            button.nextSibling.nextSibling.style.display = 'block';
        }
        if (button.id === 'delete') {
            let thisProject = document.querySelector('#current > h1');
            myProjects.splice(thisProject.id, 1, );
            let navContent = document.getElementById('navcontent');
            navContent.remove();
            removeDisplay('current');
            printNav(myProjects);
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
            let thisProject = document.querySelector('#current > h1');
            addTask(myProjects[thisProject.id], createTask(array[0], array[1], array[2], array[3]));
            clearForm('taskform');
            button.parentNode.style.display = 'none';
            removeDisplay('current');
            printProject(myProjects[thisProject.id], false, thisProject.id);
            let navContent = document.getElementById('navcontent');
            navContent.remove();
            printNav(myProjects);
        }
    })
})
