import { dueDate } from './date'

//Display add-project form.
const projectForm = document.querySelector('.project-form')

export default document.querySelector('.add-project').addEventListener ('click', (e) => {
  projectForm.style.display = 'grid'
})

//Add project to the list of projects on the sidebar.
const createProject = () => {
  const tasks = document.querySelector('.tasks-wrapper')
  
  function addProject() {
    const title = document.getElementById('project-title').value
    
    //If the title is not empty, create a project on the sidebar with the given title.
    if (title !== '') {
      const projects = document.querySelector('.projects')
      const newProject = document.createElement('div')
      newProject.classList.add('project-item')
      projects.append(newProject)
      
      const newProjectTitle = document.createElement('span')
      newProjectTitle.innerText = title
      newProjectTitle.style.wordBreak = 'break-word'
      newProject.append(newProjectTitle)
      
      const removeProject = document.createElement('span')
      removeProject.innerText = 'X'
      newProject.append(removeProject)

      const newProjectTaskContainer = document.createElement('div')
      newProjectTaskContainer.classList.add('task-container')
      newProjectTaskContainer.style.display = 'none'
      tasks.append(newProjectTaskContainer)
      
      newProject.onclick = () => {
        hideUnselectedProjects()
        newProjectTaskContainer.style.display = 'grid'
        const taskForm = document.querySelector('.task-form')
        taskForm.style.display = 'flex'
      }
      
      removeProject.onclick = () => {
        newProject.remove()
        newProjectTitle.remove()
        newProjectTaskContainer.remove()
      }

      function Task () {
        this.title = document.querySelector('#task-title').value
        this.description = document.querySelector('#description').value
        this.dueDate = dueDate()
        this.priority = document.querySelector('#priority').value

        if (this.priority === '1') {
          this.priority = 'Low'
        } else if (this.priority === '2') {
          this.priority = 'Medium'
        } else if (this.priority === '3') {
          this.priority = 'High'
        }
      }

      const taskSubmit = document.querySelector('#task-submit')

      taskSubmit.onclick = () => {
        const newTask = new Task()

        const newTaskContainer = document.createElement('div')
        newTaskContainer.classList.add('task')
        newProjectTaskContainer.append(newTaskContainer)

        const taskTitle = document.createElement('span')
        taskTitle.innerHTML = '<b>Title: </b>' + newTask.title
        newTaskContainer.append(taskTitle)
        
        const taskDescription = document.createElement('span')
        taskDescription.innerHTML = '<b>Description: </b>' + newTask.description
        newTaskContainer.append(taskDescription)

        const taskDueDate = document.createElement('span')

        if (dueDate().dueDate !== ' , ') {
          taskDueDate.innerHTML = '<b>Due Date: </b>' + dueDate().dueDate
        } else {
          taskDueDate.innerHTML = '<b><i>Due Date Not Set!</b></i>'
        }
        newTaskContainer.append(taskDueDate)

        const taskPriority = document.createElement('span')
        taskPriority.innerHTML = '<b>Priority: </b>' + newTask.priority
        newTaskContainer.append(taskPriority)

        document.querySelector('#task-title').value = ''
        document.querySelector('#description').value = ''
        document.querySelector('#due-date').value = ''
      }

      projectForm.style.display = 'none' //Close the form after creating a new project.
      document.getElementById('project-title').value = '' //Empty the title text-area.
    } else {
      alert(`Title can't be empty!`) //Don't create the project if the title is empty.
    }
  }
  
  //Create a tasks-container div for the newly created project-item.
  function hideUnselectedProjects() {
    const tasks = document.querySelector('.tasks-wrapper')
    const tasksChildren = tasks.children

  //Only display the latest tasks-item, and hide the rest.
    for (let i = 0; i < tasksChildren.length; i++) {
      tasksChildren[i].style.display = 'none'
      }
    }

  return { addProject, hideUnselectedProjects }
}

export const project = createProject()

//Press enter to add project, press escape to close the add project form.
export function keydownFunctions () {
  if (projectForm.style.display !== 'none') {
    document.addEventListener ('keydown', (e) => {
      if (projectForm.style.display !== 'none') {
        if (e.key === 'Enter') {
        project.addProject()
        }
      }

      if (e.key === 'Escape') {
        projectForm.style.display = 'none'
      }
    })
  }
}