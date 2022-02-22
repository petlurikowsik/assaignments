//creating the student constructor
function Student(rollNo, Name, age, skills, marks) {
    //object initialization code
    //creating structure
    //this(reference variable) refers current object
    this.rollNo = rollNo
    this.Name = Name
    this.age = age
    this.skills = skills
    this.marks = marks
}
//creating object for the structure
let student1 = new Student(100, 'Ramya', 20, ['c', 'Javascript', 'CSS'], [98, 97, 94, 89])
console.log(student1)

//creating prototype
Student.prototype.getSkills = () => {
    for (let values of student1.skills) {
        console.log(values)
    }
}
student1.getSkills()

Student.prototype.addSkills = () => {
    //console.log(student1.skills)
    student1.skills.push("bootstrap")
    console.log(student1.skills)
}
student1.addSkills()

Student.prototype.findTopMarks = () => {
    let topMarks = student1.marks.reduce((a, b) => a > b ? a : b)
    console.log("The top marks scored is", topMarks)
}
student1.findTopMarks()

Student.prototype.getAverage = () => {
    let sum = student1.marks.reduce((a, b) => a + b)
    let avg = sum / student1.skills.length
    console.log("The Average of marks is", avg)
}
student1.getAverage()