'use strict';
// Oefening 4
console.log('script 2 linked!');

let student = {
    name: 'Default name',
    age: 29,
    degree: 'DigX',
    courses: [],
    setPersonalDetails: function(name, age, degree){
        //Check for empty string etc....
        //if true
        this.name = name;
        this.age = age;
        this.degree = degree;
    },
    addCourse: function(course){
        if(course){
            this.courses.push(course);
        }
    },
    showStudent: function(){
        let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.
            Mijn vakken zijn: ${this.courses.join(', ')}.`;

        console.log(txt);
    }
}

let n = prompt('Name?');
let a = prompt('Age?');
let d = prompt('Degree?');
while(true){
    let c = prompt('Course?');
    if(c){
       student.addCourse(c);
    }else{
        break;
    }
}
student.showStudent();







            

            
            
            
            
            
            
            
            
            
            
            
            
            
            
