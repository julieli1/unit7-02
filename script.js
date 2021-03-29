// connect the button to the calculate function
document.getElementById('calculate').addEventListener('click', calculate)

let userInput = 0

function calculate () {
  // get the number that user typed turned into a integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // looks if userInput is positive or negative
  if (userInput >= 0) {
    document.getElementById('answer').innerHTML = 'this integer is positive'
  } else if (userInput <= 0) {
    document.getElementById('answer').innerHTML = 'this integer is negative'
  } else {
    document.getElementById('answer').innerHTML = 'please enter a valid integer'
  }
}
