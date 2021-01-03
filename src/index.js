let pVal = document.getElementById('pVal')
let pValText = document.getElementById('pValText')

pVal.onchange = () => {
  if (pVal.value === '1') {
    pValText.innerText = 'Low'
  } else if (pVal.value === '2') {
    pValText.innerText = 'Medium'
  } else if (pVal.value === '3') {
    pValText.innerText = 'High'
  }
}