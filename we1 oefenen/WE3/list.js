'use strict'

function Student  (name,age,degree,courses){
    this.name=name,
    this.age=age,
    this.degree=degree,
    this.courses=courses
};

let regstudent = ()=>{
 let name = document.getElementById('inputname').value;
 let age = document.getElementById('inputage').value;
 let degree = document.getElementsByName('degree');
 let seldegree
for (let i of degree) {
    if(i.checked){
        seldegree = i.value
        break
    }
}
 let course= document.getElementsByName('course');
 let selcourse=[]
 for (let i of course) {
    if(i.checked){
        selcourse.push(i.value);
    }
}
 let student = new Student(name,age,seldegree,selcourse);
console.log(student)
}
    
let register = document.getElementById('form');
register.addEventListener("submit", (e) => {
    regstudent();
    e.preventDefault();
});
