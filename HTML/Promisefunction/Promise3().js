console.log("Friend asked me whether am coming to college tomorrow")
//Promise 1
let myProm = false
const promObj = new Promise((fulfill, reject) => {
    if (myProm == true) {
        setTimeout(() => {
            fulfill("Me : Yes, am coming. Are you free after college?")
        }, 4000)
    }
    else {
        setTimeout(() => {
            reject("Me : Sorry, i can't come tomorrow coz am sick")
        }, 5000)
    }
})
promObj
    .then(msg => {
        console.log(msg)
        return promObj1
    })
    .then(result => {
        console.log(result)
        return promObj2
    })
    .then(result1 => console.log(result1))
    .catch(err => console.error(err))


//Promise 2
let hisProm = true
const promObj1 = new Promise((fulfill, reject) => {
    if (hisProm == true) {
        setTimeout(() => {
            fulfill("Friend : Yes, am free. Shall we catch up?")
        }, 8000)
    }
    else {
        setTimeout(() => {
            reject("Friend : No, am busy. Can we catch up later.")
        }, 8000)
    }
})


//Promise 3
let myProm1 = false
const promObj2 = new Promise((fulfill, reject) => {
    if (myProm1 == true) {
        setTimeout(() => {
            fulfill("Me : Ok then, Let's meet at Shopping mall.")
        }, 10000)
    }
    else {
        setTimeout(() => {
            reject("Ok, No problem take care.")
        }, 10000)
    }
})