"use strict";
/*

let color = {

    nR : 0, 
    nG : 0, 
    nB : 0,
    showColor:()=>{
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`)
    },
    setColor:(r,g,b)=>{
        this.nR=r;
        this.nG=g;
        this.nB=b;
        if (r == undefined || ( r<0 || r> 255)) {
            console.log("red is wrong")
        }
        if (g == undefined || ( g<0 || g> 255)) {
            console.log("groen is wrong")
        }
        if (b == undefined || ( b<0 || b> 255)) {
            console.log("blue is wrong")
        }
    }
};
this.nR = prompt("geef de waarde van de kleur rood tussen 255en 0",0);
this.nG = prompt("geef de waarde van de kleur groen tussen 255en 0",0);
this.nB = prompt("geef de waarde van de kleur blue tussen 255en 0",0);
color.setColor(nR,nG,nB);
color.showColor();
*/

let student ={
    naam: "niks",
    age: 0,
    degree: "ta mere",
    courses: [],
    setPersonalDetails(naam,age,degree){

    },
    addCourse:  (course) => {
        this.courses.push(course);

    },
    showStudent: () => {
        console.log("mijn naam  " + this.   naam + " mijn leeftijd  "+ this.age + " jaar oud ik volg  "+ this.degree +" in ehb")

    },
}

student.showStudent();
student.addCourse('rxedghc');