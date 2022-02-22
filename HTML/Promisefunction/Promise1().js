/*console.log("Completion of homework")
//create Promise
const prom = false
let promObj = new Promise((fulfill, reject) => {
    if (prom == true) {
        setTimeout(() => {
            fulfill("Yes, I have completed")
        }, 5000)
    }
    else {
        setTimeout(() => {
            reject("No, I was out of town")
        }, 5000)
    }
})
promObj
    .then(msg => console.log(msg))
    .catch(err => console.error(err))*/


console.log("checking whether the number is even or odd")
let number = 22
const object = new Promise((fulfill, reject) => {
    if (number % 2 == 0) {
        setTimeout(() => {
            fulfill("Yes the number is even number")
        }, 3000)
    }
    else {
        setTimeout(() => {
            reject("It is odd number")
        }, 3000)
    }
})
object
    .then(msg => console.log(msg))
    .catch(err => console.error(err))