
//first 10 multiples of 3
var a;
for (a = 1; a <= 10; a++) {
    let x = 3 * a
    console.log(x)
}

//5 multiples of 7 from 30 to 100
var x;
for (x = 5; x <= 9; x++) {
    let a = 7 * x
    console.log(a)
}

//Factors of 20
var i;
for (i = 1; i <= 20; i++) {
    if (20 % i == 0) {
        console.log(i)
    }
}

//given number is a prime number or not
const number = 4;
let isprime = true;
if (number == 1) {
    console.log("1 is neither prime nor composite number")
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isprime = false;
            break;
        }
    }
}

if(isprime){
    console.log(`${number} is a prime number`);
}
else{
    console.log(`${number} is not a prime number`);
}