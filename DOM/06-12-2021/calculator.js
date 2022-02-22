//get display input field
let input = document.getElementById("result")

//This function clear all the values
function clearScreen() {
    input.value = "";
}

//This function display values
let display = ((value) => {
    input.value += value;
})

//This function evaluates the expression and return resukt
let calculate = (() => {
    let p = input.value;
    let q = eval(p);
    input.value = q;
})