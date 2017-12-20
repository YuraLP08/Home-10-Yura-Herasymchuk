
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==
function add() {
  var num1, num2, add
  num1 = document.getElementById('n1').value
  num2 = document.getElementById('n2').value
  add = num1+num2
  document.getElementById('out').innerHTML = add
}

function subtract() {
  var num1, num2, sub
  num1 = document.getElementById('n1').value
  num2 = document.getElementById('n2').value
  sub = num1-num2
  document.getElementById('out').innerHTML = sub
}

function multiply() {
  var num1, num2, mult
  num1 = document.getElementById('n1').value
  num2 = document.getElementById('n2').value
  mult = num1*num2
  document.getElementById('out').innerHTML = mult
}

function divide() {
  var num1, num2, divide
  num1 = document.getElementById('n1').value
  num2 = document.getElementById('n2').value
  divide = num1/num2
  document.getElementById('out').innerHTML = divide
}

function power() {
  var num1, num2, pownum
  num1 = document.getElementById('n1').value
  num2 = document.getElementById('n2').value
  pownum = Math.pow(num1, num2)
  document.getElementById('out').innerHTML = pownum
}

function radical() {
  var num1, num2, radnum
  num1 = document.getElementById('n1').value
  num2 = document.getElementById('n2').value
  radnum = Math.exp(Math.log(num1)/num2)
  document.getElementById('out').innerHTML = radnum
}

function cosinus() {
  var num1, cosnum
  num1 = document.getElementById('n1').value
  cosnum = Math.cos(num1)
  document.getElementById('out').innerHTML = cosnum
}

function sinus() {
  var num1, sinnum
  num1 = document.getElementById('n1').value
  sinnum = Math.sin(num1)
  document.getElementById('out').innerHTML = sinnum
}

function fact() {
  var num1, factnum=1
  num1 = document.getElementById('n1').value
  for (i = num1; i >= 1; i--) {
    factnum=factnum*i;
  }
  document.getElementById('out').innerHTML = factnum
}
