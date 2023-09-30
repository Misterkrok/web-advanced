'use strict';
// Oefening 5-6
console.log('script 3 linked!');

let student = {
    name: 'Default name',
    age: 29,
    degree: 'DigX',
    courses: [],
    setPersonalDetails(details){
        //The array on the right gets destructured into the variabels on the left
        //The place of the variabeles determines which data is assigned.
        //Position 0 in the array controls the name => this.name is set on first position and will take that value.
        [this.name,this.age,this.degree] = details;
    },
    addCourse(...courses){//REST operator catches all arguments and bundles them into an array
        this.courses = [...this.courses, ...courses]; //spread operator allows for easy concatenation of arrays.
    },
    showStudent(){
        let txt = `My name is ${this.name}. I am ${this.age} years old and follow ${this.degree} at EhB. 
        My courses are: ${this.courses.join(', ')}.`;

        console.log(txt);
    }
}
let data = [];
//Using an array, we are storing all the answers as new elements of that array.
data.push(prompt('Name?'));
data.push(prompt('Age?'));
data.push(prompt('Degree?'));
student.setPersonalDetails(data);

//example of using the rest operator: amount of arguments is not fixed

student.addCourse('WE', 'WDA');
student.addCourse('Programming Essentials');
student.addCourse('Programming Advanced', 'Android', 'iOS', 'Design');

// while(true){
//     let c = prompt('Course?');
//     if(c){
//        student.addCourse(c);
//     }else{
//         break;
//     }
// }
student.showStudent();







            

            
            
            
            
            
            
            
            
            
            
            
            
            
            
