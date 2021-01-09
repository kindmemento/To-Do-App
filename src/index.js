import * as functions from './functions'

const projectSubmit = document.getElementById('project-submit')

projectSubmit.onclick = () => {
  functions.project.addProject()
}

functions.project.hideUnselectedProjects()
functions.keydownFunctions()