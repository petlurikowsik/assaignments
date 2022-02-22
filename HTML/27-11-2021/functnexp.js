console.log("First 10 multiples of 3")
const x = function (a) {
    return 3 * a
}
for (var i = 1; i <= 10; i++) {
    let multiplesof3 = x(i)
    console.log(multiplesof3)
}


console.log("5 Multiples of 7 from 30 to 100")
const y = function (b) {
    return 7 * b
}
for (var i = 5; i <= 9; i++) {
    let multiplesof7 = y(i)
    console.log(multiplesof7)
}


console.log("Factors of 20")
const a = function (x) {
    return x
}
for (var i = 1; i <= 20; i++) {
    if (20 % i == 0) {
        let factorsof20 = a(i)
        console.log(factorsof20)
    }
}

console.log("The given number is prime or not")
























