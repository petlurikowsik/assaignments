class Student {
    //constructor is called when a new object is created
    constructor(rollNo, Name, age, skills, marks) {
        //object initialization code
        //this refers to current object
        this.rollNo = rollNo
        this.Name = Name
        this.age = age
        this.skills = skills
        this.marks = marks
    }

    getskills() {
        for (let values of student1.skills) {
            console.log(values)
        }
    }

    addskills() {
        student1.skills.push('HTML')
        console.log(student1.skills)
    }

    findTopMarks() {
        let topMarks = student1.marks.reduce((acc, b) => acc > b ? acc : b)
        console.log("The top marks scored is", topMarks)
    }

    getAverage() {
        let sum = student1.marks.reduce((acc, b) => acc + b)
        let avg = sum / student1.marks.length
        console.log("The average of the marks is", avg)
    }
}
let student1 = new Student(100, 'Ramya', 20, ['c', 'Javascript', 'CSS'], [98, 97, 94, 89])
console.log(student1)
student1.getskills()
student1.addskills()
student1.findTopMarks()
student1.getAverage()