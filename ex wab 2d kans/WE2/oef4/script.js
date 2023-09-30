'use strict';


let student = {

    name: `default`,
    age: 0,
    degree: `default`,
    courses: [],

    setPersonalDetails: function(n, a, d){
        this.name = n;
        this.age = a;
        this.degree = d;
    },

    addCourse: function(course){
       if(course){
        this.courses.push(course);
       }
    },

    showStudent: function(){
       let txt = `mijn naam is ${this.name} en ik ben ${this.age} jaar oud en ik studeer ${this.degree} en ik volg de vakken: ${this.courses.join(`, `)}`;
         console.log(txt);
    },
}

let n = prompt(`enter name`);
let a = prompt(`enter age`);
let d = prompt(`enter degree`);

student.setPersonalDetails(n, a, d);

while(true){
    let c = prompt(`enter course`);
    if(c){
        student.addCourse(c);
    }else{
        break;
    }
}

console.log(student.showStudent());