console.log("First 10 multiples of 3")
let z = a => 3 * a
for (var i = 1; i <= 10; i++) {
    let multiplesof3 = z(i)
    console.log(multiplesof3)
}



console.log("5 Multiples of 7 from 30 to 100")
let c = b => 7 * b
for (var i = 5; i <= 9; i++) {
    let multiplesof7 = c(i)
    console.log(multiplesof7)
}

console.log("Factors of 20")
let d = x => x
for (var i = 1; i <= 20; i++) {
    if (20 % i == 0) {
        var factorsof20 = d(i)
        console.log(factorsof20)
    }
}
