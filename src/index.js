import * as functions from './functions'
import * as priority from './priority'
import { createNewTask } from './taskMachine'

const projectSubmit = document.getElementById('project-submit')

projectSubmit.onclick = () => {
  functions.project.addProject()
}

functions.project.hideUnselectedProjects()
functions.keydownFunctions()

const taskSubmit = document.getElementById('task-submit')

taskSubmit.onclick = () => {
  createNewTask()
}