'use strict';


let student = {

    name: `default`,
    age: 0,
    degree: `default`,
    courses: [],

    setPersonalDetails(details){
       [this.name, this.age, this.degree] = details;
    },

    addCourse(...courses){
        this.courses = [...this.courses, ...courses];
    },

    showStudent(){
       let txt = `mijn naam is ${this.name} en ik ben ${this.age} jaar oud en ik studeer ${this.degree} en ik volg de vakken: ${this.courses.join(`, `)}`;
         console.log(txt);
    },
}
let data =[];

data.push(prompt(`enter name`));
data.push(prompt(`enter age`));
data.push(prompt(`enter degree`));
student.setPersonalDetails(data);

student.addCourse(`html`, `css`, `js`);


/*while(true){
    let c = prompt(`enter course`);
    if(c){
        student.addCourse(c);
    }else{
        break;
    }
}*/

console.log(student.showStudent());