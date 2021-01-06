import * as priority from './priority.js'
import * as date from './date'
import * as forms from './forms'

priority.setPriority()

const projectSubmit = document.getElementById('project-submit')

projectSubmit.onclick = () => {
  forms.addProject()
}

//press enter to add project, press escape to close the add project form
forms.keydownFunctions()