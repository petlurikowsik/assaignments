let array = [25, 47, 1, 8, 6, 19, 6]
let sum = array.reduce((acc, b) => acc + b)
console.log(`The sum of the elements of array is ${sum}`)


console.log("----------------------")
let evenNo = array.filter(v => v % 2 == 0
)
console.log("The even numbers are", evenNo)


console.log("----------------------")
let prime = array.filter(v => {
    for (let i = 2; i < v; i++) {
        if (v % i == 0)
            return false
    }
    return true
})
console.log("The prime numbers of the array are", prime)


/*console.log("----------------------")
let max = array[0]
let maxValue = array.filter(v => {
    for (let i = 1; i < v; i++) {
        if (max < v)
            return v
    }
})*/


console.log("----------------------")
let arr = [11, 52, 33, 3, 14, 20, 5]
let maxValue = arr.reduce((a, b) => a > b ? a : b)
console.log("The maximum value in the array is", maxValue)

let minValue = arr.reduce((a, b) => a < b ? a : b)
console.log("The minimun value in the array is", minValue)

/*let x = Math.min(...array)
console.log("The minimum value in the array is", x)*/