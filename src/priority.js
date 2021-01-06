//change priority level on change based on selection

export function setPriority() {

  let priority = document.getElementById('priority')
  let pValText = document.getElementById('pValText')

  priority.onchange = () => {
    if (priority.value === '1') {
      pValText.innerText = 'Low'
    } else if (priority.value === '2') {
      pValText.innerText = 'Medium'
    } else if (priority.value === '3') {
      pValText.innerText = 'High'
    }
  }
}