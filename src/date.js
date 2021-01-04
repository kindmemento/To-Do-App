const submit = document.getElementById('submit')

submit.onclick = () => {
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
  
  function Task() {
    this.title = document.getElementById('title').value,
    this.description = document.getElementById('description').value,
    this.dueDate = dueDate,
    this.priority = pValText.innerText
  }

  let task = new Task()

  console.log(task)
}