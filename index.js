let num1 = 8
let num2 = 2
let num1el = document.getElementById("num1-el")
let num2el = document.getElementById("num2-el")

let sumel = document.getElementById("sum-el")

num1el.textContent = num1
num2el.textContent = num2

function add() {
    let sum = num2 + num1
    sumel.textContent = sum
}

function subtract() {
    let sum = num1 - num2
    sumel.textContent = sum
}

function divide() {
    let sum = num1 / num2
    sumel.textContent = sum
}
function multiply() {
    let sum = num1 * num2
    sumel.textContent = sum
}