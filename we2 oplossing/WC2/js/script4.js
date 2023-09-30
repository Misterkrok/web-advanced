'use strict';
window.onload = function(){
    //code executes when page is done loading.
    //Get the buttons and add eventlisteners
    document.getElementById('create').addEventListener('click', createStudent);
    document.getElementById('show').addEventListener('click', showStudents);

    let listStudents = [];//List of students

    //Student object constructor
    function Student(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.courses = [];
        this.setPersonalDetails = function(details){
            [this.name,this.age,this.degree] = details;
        };
        this.addCourse = function(course){
            this.courses.push(course);
        };
        this.showStudent = function(){
            let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
Courses are: ${this.courses.join(', ')}.`;

            return txt;
        }

    }

    function createStudent(){
        //ask for details
        let name = prompt('Name?');
        let age = prompt('Age?');
        let degree = prompt('Degree?');

        let student = new Student(name,age,degree);

        //ask for all the courses
        while(true){
            let c = prompt('Course?');
            if (c) {
                student.addCourse(c);
            } else {
                break;
            }
        }

        // Done. Add to list\
        listStudents.push(student);

    }

    function showStudents(e){
        let div = document.getElementById('content');
        for(let s of listStudents){
            let p = document.createElement('p');
            p.innerHTML = s.showStudent();
            div.appendChild(p);
        }
        stopPropagation();
        e.preventDefault();
    }


};



















