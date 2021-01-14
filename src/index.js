import * as functions from './functions'
import * as priority from './priority'

const projectSubmit = document.getElementById('project-submit')

projectSubmit.onclick = () => {
  functions.project.addProject()
}

functions.project.hideUnselectedProjects()
functions.keydownFunctions()

priority.setPriority()