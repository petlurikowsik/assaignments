let NumberArray = [10, 46, 27, 39, 4]
let sum = 0
for (var i = 0; i < NumberArray.length; i++) {
    sum += NumberArray[i];
}
console.log(`The sum of elements of number array is ${sum}`)

console.log("---------------------------")
console.log("The even numbers of array are")
let array = [11, 12, 13, 14, 15, 16, 117]
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        let evenNumber = array[i]
        console.log(evenNumber)
    }
}

console.log("---------------------------")
console.log("The Prime numbers in array are")
let arr = [12, 43, 7, 5, 6, 9, 3, 2, 1]
for (i = 0; i < arr.length; i++) {
    let isprime = true;
    let number = arr[i];
    if (number == 1) {
        console.log("1 is neither prime nor composite")
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isprime = false
                break;
            }
        }
        if (isprime) {
            console.log(number)
        }
    }
}


console.log("---------------------------")
let arr1 = [17, 2, 3, 4, 5, 12]
let max = arr1[0]
for (let i = 1; i < arr1.length; i++) {
    if (max < arr1[i]) {
        max = arr1[i]
    }
}
console.log(`${max} is the largest element in array`)
let min = arr1[0]
for (let i = 1; i < arr1.length; i++) {
    if (min > arr1[i]) {
        min = arr1[i]
    }
}
console.log(`${min} is the smallest element in array`)


console.log("-------------Insertion--------------")
let arr2 = ['bluberry', 'Apple', 'Mango', 'Banana']
console.log("Before Insertion:", arr2)

let x = arr2.unshift('Cherry', 'Pineapple')
console.log("Insertion at the beginning:", arr2)

let y = arr2.push('Orange', 'Grapes')
console.log("Insertion at the end", arr2)

let z = arr2.splice(4, 0, 'hello')
console.log("Insertion in between:", arr2)



console.log("-------------Deletion--------------")
let arr3 = ['a', 'b', 'c', 'd']
console.log("Before Deletion:", arr3)

let a = arr3.shift()
console.log("Deletion at the beginning:", arr3)

let arr4 = ['a', 'b', 'c', 'd']

let b = arr4.pop()
console.log("Deletion at the end:", arr4)

let c = arr4.splice(1, 1)
console.log("Deletion in between:", arr4)



console.log("-------------Replacement--------------")
let pets = ['dog', 'cat', 'parrot', 'chicks']
console.log("before replacement", pets)

let replace = pets.splice(2, 1, 'cow')
console.log("after replacement", pets)
console.log("removed element is", replace)


console.log("-------------Merge--------------")
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

//merge
let x = arr1.concat(arr2)
console.log(x)