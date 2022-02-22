//get input
let input1 = document.getElementById("result")
let button = document.querySelector(".btn")
let h2 = document.querySelector("h2")
let input2 = document.querySelector("clear")

//The clearScreen function
function clearScreen() {
    input1.value = "";
    h2.textContent = "";
}

//Adding event to button
button.addEventListener('click', function () {
    //read the value
    let v = input1.value
    //check prime number or not
    function isprime() {
        return true
    }
    if (v == 1) {
        h2.textContent = "1 is neither prime nor composite"
    }
    else if (v > 1) {
        for (let i = 2; i < v; i++) {
            if (v % i == 0) {
                isprime = false;
                break;
            }
        }
    }
    if (isprime) {
        h2.textContent = "It is a Prime Number"
    }
    else {
        h2.textContent = "It is not a Prime Number"
    }

}) 
