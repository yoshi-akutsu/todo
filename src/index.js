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

const buttonObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        let taskKillers = document.querySelectorAll('.deletetask');
        taskKillers.forEach(killer => {
            killer.addEventListener('click', (e) => {
                let taskId = killer.parentNode;
                taskId = taskId.id;
                taskId = taskId.replace('task', '');
                let projectId = document.querySelector('#current > h1');
                myProjects[projectId.id].tasks.splice(taskId, 1, );
                removeDisplay('current');
                printProject(myProjects[projectId.id], false, projectId.id);
                let navContent = document.getElementById('navcontent');
                navContent.remove();
                printNav(myProjects);
                killer.removeEventListener('click', e)
            })
        })
  
    });
});

const config = { attributes: true, childList: true, characterData: true };
mutationObserver.observe(document.getElementById('nav'), config);
mutationObserver.observe(document.getElementById('content'), config);
buttonObserver.observe(document.getElementById('content'), config);

initialListen();

let taskKillers = document.querySelectorAll('.deletetask');
taskKillers.forEach(killer => {
    killer.addEventListener('click', (e) => {
        let taskId = killer.parentNode;
        taskId = taskId.id;
        taskId = taskId.replace('task', '');
        let projectId = document.querySelector('#current > h1');
        myProjects[projectId.id].tasks.splice(taskId, 1, );
        removeDisplay('current');
        printProject(myProjects[projectId.id], false, projectId.id);
        let navContent = document.getElementById('navcontent');
        navContent.remove();
        printNav(myProjects);
        killer.removeEventListener('click', e)
    })
})

const buttons = document.querySelectorAll('.main');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'newproject') {
            if (button.nextSibling.style.display === 'block'){
                button.nextSibling.style.display = 'none';
            }
            else {
                button.nextSibling.style.display = 'block';
            }
        }
        if (button.id === 'newtask') {
            if (button.nextSibling.nextSibling.style.display === 'block') {
                button.nextSibling.nextSibling.style.display = 'none';
            }
            else {
                button.nextSibling.nextSibling.style.display = 'block';
            }
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
            if (projectForm.value !== ''){
                let newProject = createProject(projectForm.value, );
                clearForm('projectform');
                button.parentNode.style.display = 'none';
                const navContent = document.getElementById('navcontent');
                navContent.remove();
                myProjects.push(newProject);
                printNav(myProjects, false);
            }

        }
        if (button.id === 'addtask'){
            const taskForm = document.getElementById('taskform');
            let array = [];
            taskForm.childNodes.forEach(child => {
                if (child.tagName === 'INPUT' || child.tagName === 'SELECT'){
                    array.push(child.value);
                }
            })
            let thisProject = document.querySelector('#current > h1');
            if (array[0] !== ''){
                if (array[1] === ''){
                    array[1] = '-';
                }
                addTask(myProjects[thisProject.id], createTask(array[0], array[1], array[2], array[3]));
                clearForm('taskform');
                button.parentNode.style.display = 'none';
                removeDisplay('current');
                printProject(myProjects[thisProject.id], false, thisProject.id);
                let navContent = document.getElementById('navcontent');
                navContent.remove();
                printNav(myProjects);
            }    
        }
    })
})
