// setup standard variables
let d = 0
let r = 0
let a = 0
let c = 0
const pi = 3.14159
// event listener for the button to start the checker
document.getElementById('button').addEventListener('click', checker)
// functions
// checks if the input is above or below 0 if its below it will show an error mesage if its above it will trigger the calculate function
function checker () {
  d = document.getElementById('input').value
  d = parseInt(d)
  if (d <= 0) {
    alert('error:the inputed diameter must be above 0')
  }
  if (d > 0) {
    calculate()
  }
}
// calculates the Area, Circumference and Radius and displays them
function calculate () {
  d = document.getElementById('input').value
  d = parseInt(d)
  r = d / 2
  document.getElementById('out3').innerHTML = r
  a = pi * r ** 2
  document.getElementById('out1').innerHTML = a
  c = 2 * pi * r
  document.getElementById('out2').innerHTML = c
}
