//display add-project form
const projectForm = document.querySelector('.project-form')

export default document.querySelector('.add-project').addEventListener ('click', (e) => {
  projectForm.style.display = 'grid'
})

//add project to the list of projects on the sidebar
const createProject = () => {
  function addProject() {
    const title = document.getElementById('project-title').value
    const tasks = document.querySelector('.tasks-wrapper')
    
    //if the title is not empty, create a project on the sidebar with the given title.
    if (title !== '') {
      const projects = document.querySelector('.projects')
      const newProject = document.createElement('div')
      newProject.classList.add('project-item')
      projects.append(newProject)
      
      const newProjectTitle = document.createElement('span')
      newProjectTitle.innerText = title
      newProject.append(newProjectTitle)
      
      const removeProject = document.createElement('span')
      removeProject.innerText = 'X'
      newProject.append(removeProject)
      
      
      const newProjectTasks = document.createElement('div')
      newProjectTasks.classList.add('tasks-item')
      tasks.append(newProjectTasks)
      
      newProject.onclick = () => {
        hideUnselectedProjects()
        newProjectTasks.style.display = 'grid'
      }
      
      removeProject.onclick = () => {
        newProject.remove()
        newProjectTitle.remove()
      }

      projectForm.style.display = 'none' //close the form
      document.getElementById('project-title').value = '' //empty the title text-area
    } else {
      alert(`Title can't be empty!`) //don't create the project if the title is empty.
    }
  }
  
  //create a tasks-item div for the newly created project-item
  function hideUnselectedProjects() {
    const tasks = document.querySelector('.tasks-wrapper')
    const tasksChildren = tasks.children

  //only display the latest tasks-item, and hide the rest
    for (let i = 0; i < tasksChildren.length; i++) {
      tasksChildren[i].style.display = 'none'
      }
    }

return { addProject, hideUnselectedProjects }
}

export const project = createProject()

//press enter to add project, press escape to close the add project form
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