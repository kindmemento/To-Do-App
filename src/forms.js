//display add-project form

const projectForm = document.querySelector('.project-form')

export default document.querySelector('.add-project').addEventListener ('click', (e) => {
  projectForm.style.display = 'grid'
})

//add project to the list of projects on the sidebar
export function addProject() {
  const title = document.getElementById('project-title').value
  const tasks = document.querySelector('.tasks')

  //if the title is not empty, create a project on the sidebar with the given title.
  if (title !== '') {
  const projects = document.querySelector('.projects')
  const newProject = document.createElement('div')
  newProject.classList.add('project-item')
  projects.append(newProject)

  const newProjectTitle = document.createElement('span')
  newProjectTitle.innerText = title
  newProject.append(newProjectTitle)

  const newProjectTasks = document.createElement('div')
  newProjectTasks.classList.add('task-item')
  tasks.append(newProjectTasks)

  const removeProject = document.createElement('span')
  removeProject.innerText = 'X'
  newProject.append(removeProject)

  removeProject.onclick = () => {
    newProject.remove()
    newProjectTitle.remove()
  }
  
  projectForm.style.display = 'none'
  document.getElementById('project-title').value = ''
  } else {
    alert(`Title can't be empty!`) //don't create the project if the title is empty.
  }
}

//press enter to add project, press escape to close the add project form
export function keydownFunctions () {
  if (projectForm.style.display !== 'none') {
    document.addEventListener ('keydown', (e) => {
      if (e.key === 'Enter') {
        addProject()
      }

      if (e.key === 'Escape') {
        projectForm.style.display = 'none'
      }
    })
  }
}