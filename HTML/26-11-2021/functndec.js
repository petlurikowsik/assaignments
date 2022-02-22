
console.log("First 10 multiples of 3")
function multiplesof3(a) {
    return 3 * a
}

for (var i = 1; i <= 10; i++) {
    let x = multiplesof3(i)
    console.log(x)
}

console.log("5 Multiples of 7 from 30 to 100")
function multiplesof7(b) {
    return 7 * b
}

for (var i = 5; i <= 9; i++) {
    let y = multiplesof7(i)
    console.log(y)
}

console.log("Factors of 20")
function factorsof20(x) {
    return x
}

for (var i = 1; i <= 20; i++) {
    if (20 % i == 0) {
        let y = factorsof20(i)
        console.log(y)
    }
}

console.log("The given no. is prime or not")
const number = 6
function isprime() {
    return true
}
if (number == 1) {
    console.log("1 is neither prime nor composite")
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isprime = false;
            break;
        }
    }
}
if (isprime) {
    console.log(`${number} is a prime number`)
}
else {
    console.log(`${number} is not a prime number`)
}


