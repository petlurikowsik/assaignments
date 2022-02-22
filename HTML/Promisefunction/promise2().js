//creating promise
console.log("Father said to withdraw money from ATM")
let amFree = true
//I will go after 10 mins 
const promObj = new Promise((fulfill, reject) => {
    if (amFree == true) {
        setTimeout(() => {
            fulfill("Okay dad, I'll go within 5mins")
        }, 5000);
    }
    else {
        setTimeout(() => {
            reject("Iam busy right now. I'll go afterwards")
        }, 5000);
    }
})
//consume
promObj
    .then(msg => {
        console.log(msg)
        return machine
    })
    .then(result=>console.log(result))
    .catch(err => {
        console.error(err)
    })


let atmWorks = true
const machine = new Promise((fulfill, reject) => {
    if (atmWorks == true) {
        setTimeout(() => {
            fulfill("Dad, here's the money you told me to withdraw")
        }, 15000);
    }
    else {
        setTimeout(() => {
            reject("Sorry dad, there's no money in the ATM machine")
        }, 15000);
    }
})
