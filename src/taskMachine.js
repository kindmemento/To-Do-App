const tasker = () => {

function taskGenerator() {
  const tasks = document.querySelector('.task-wrapper')

  const taskForm = document.createElement('form')
  taskForm.classList.add('task-form')
  tasks.append(taskForm)

  const titleWrapper = document.createElement('div')
  createTasksContainer.newProjectTaskContainer.append(titleWrapper)

  const title = document.createElement('span')
  title.innerText = 'Title'
  titleWrapper.append(title)

  const titleInput = document.createElement('input')
  titleInput.setAttribute('type', 'text')
  titleInput.id = 'title-input'
  titleInput.placeholder = 'Enter a title for the task.'
  titleInput.required
  titleWrapper.append(titleInput)

  const descriptionWrapper = document.createElement('div')
  createTasksContainer.newProjectTaskContainer.append(descriptionWrapper)

  const description = document.createElement('span')
  description.innerText = 'Description'
  descriptionWrapper.append(description)

  const descriptionInput = document.createElement('input')
  descriptionInput.setAttribute('type', 'text')
  descriptionInput.id = 'description'
  descriptionInput.placeholder = 'Describe the task.'
  descriptionInput.required
  descriptionWrapper.append(descriptionInput)

  const dueDateWrapper = document.createElement('div')
  createTasksContainer.newProjectTaskContainer.append(dueDateWrapper)

  const dueDate = document.createElement('span')
  dueDate.innerText = 'Due Date: '
  dueDateWrapper.append(dueDate)

  const dueDateInput = document.createElement('input')
  dueDateInput.setAttribute('type', 'date')
  dueDateInput.id = 'due-date'
  dueDateInput.required
  dueDateWrapper.append(dueDateInput)

  const priorityWrapper = document.createElement('div')
  createTasksContainer.newProjectTaskContainer.append(priorityWrapper)

  const priority = document.createElement('span')
  priority.innerText = `What's this task's priority?`
  priorityWrapper.append(priority)

  const priorityInput = document.createElement('input')
  priorityInput.setAttribute('type', 'range')
  priorityInput.id = 'priority'
  priorityInput.min = '1'
  priorityInput.max = '3'
  priorityInput.value = '2'
  priorityWrapper.append(priorityInput)

  const priorityValue = document.createElement('div')
  priorityValue.id = 'pValText'
  priorityValue.innerText = 'Medium'
  priorityWrapper.append(priorityValue)

  const submit = document.createElement('div')
  submit.id = 'task-submit'
  createTasksContainer.newProjectTaskContainer.append(submit)

  const submitButton = submit.createElement('button')
  submitButton.innerText = 'Submit'

  priorityInput.onchange = () => {
    if (priorityInput.value === '1') {
      priorityValue.innerText = 'Low'
    } else if (priority.value === '2') {
      priorityValue.innerText = 'Medium'
    } else if (priority.value === '3') {
      priorityValue.innerText = 'High'
    }
  }
}

function dateOutput() {
  taskGenerator.submitButton.onclick = () => {
    let date = document.getElementById('due-date').value
    let year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3)
    let month = date.charAt(5) + date.charAt(6)
  
    if (month === '01') {
      month = 'January'
    } else if (month === '02') {
      month = 'February'
    } else if (month === '03') {
      month = 'Marc'
    } else if (month === '04') {
      month = 'April'
    } else if (month === '05') {
      month = 'May'
    } else if (month === '06') {
      month = 'June'
    } else if (month === '07') {
      month = 'July'
    } else if (month === '08') {
      month = 'August'
    } else if (month === '09') {
      month = 'September'
    } else if (month === '10') {
      month = 'October'
    } else if (month === '11') {
      month = 'November'
    } else if (month === '12') {
      month = 'December'
    }
  
    let day = date.charAt(8) + date.charAt(9)
    let dueDate = month + ' ' + day + ', ' + year
    console.log(dueDate)
  }
}

  return { taskGenerator, dateOutput }
}

export const taskMachine = tasker()