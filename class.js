class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }

}

const student1 = new student(12, "shuvo");
const student2 = new student(22, "mahiya");
const student3 = new student(17, "shakib");
//console.log(student1.name, student2.name);
console.log(student1, student2,student3);