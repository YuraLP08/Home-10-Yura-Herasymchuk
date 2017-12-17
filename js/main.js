
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==
function add() {
  var num1, num2, add
  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)
  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)
  add = num1+num2
  document.getElementById('out').innerHTML = add
}

function subtract() {
  var num1, num2, sub
  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)
  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)
  sub = num1-num2
  document.getElementById('out').innerHTML = sub
}

function multiply() {
  var num1, num2, mult
  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)
  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)
  mult = num1*num2
  document.getElementById('out').innerHTML = mult
}

function divide() {
  var num1, num2, divide
  num1 = document.getElementById('n1').value
  num1 = parseInt(num1)
  num2 = document.getElementById('n2').value
  num2 = parseInt(num2)
  divide = num1/num2
  document.getElementById('out').innerHTML = divide
}

