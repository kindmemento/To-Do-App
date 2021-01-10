export const createNewTask = () => {
  const taskContainer = document.getElementById('task-container')

  const newTask = document.createElement('div')
  newTask.classList.add('task-item')
  newTask.innerText = 'This is a new task.'
  taskContainer.appendChild(newTask)
}