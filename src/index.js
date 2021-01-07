import * as priority from './priority.js'
import * as date from './date'
import * as functions from './functions'

priority.setPriority()

const projectSubmit = document.getElementById('project-submit')

projectSubmit.onclick = () => {
  functions.project.addProject()
}

functions.project.hideUnselectedProjects()
functions.keydownFunctions()