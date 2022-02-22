//creating employee object
let employee = {
    Empno: 101,
    Name: 'Ramya',
    Basic: 50000,
    Designation: 'Software Developer'
}
console.log('The emp profile', employee)
//adding new property city
employee.City = 'Hyderabd'
console.log('After adding new key and value', employee)


console.log('-----------------------------')
//creating a copy of employee object
let copyObj = Object.assign({}, employee)
console.log('The copy', copyObj)


//making changes to the object
employee.Age = 20
console.log('changes made in obj', employee)


console.log('-----------------------------')
//updating property
employee.Designation = 'Manager'
console.log('New emp profile', employee)


console.log('-----------------------------')
//printing only keys in the object
let keysOfEmployee = Object.keys(employee)
console.log('The keys of employee are', keysOfEmployee)


console.log('-----------------------------')
//printing only values in the object
let valuesOfEmployee = Object.values(employee)
console.log('The values of employee are', valuesOfEmployee)


console.log('-----------------------------')
//to merge objects
let obj1 = {
    a: 100,
    b: 200
}
let obj2 = {
    c: 300,
    d: 400
}
let mergedObject = Object.assign({}, obj1, obj2)
console.log(mergedObject)


console.log('-----------------------------')
//Accesing property
console.log(employee.Name)
console.log(employee['Basic'])


console.log('-----------------------------')
//deleting property
delete obj1.a
console.log(obj1)


console.log('-------------These are keys----------------')
//for in loop
for(let keys in employee){
    console.log(keys)
}
console.log('--------------These are values---------------')
for(let values in employee){
    console.log(employee[values])
}