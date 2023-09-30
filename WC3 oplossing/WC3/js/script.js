'use strict';
window.onload = function(){

    //code executes when page is done loading.
    //Get the buttons and add eventlisteners
    document.getElementById('register')
        .addEventListener('click', createStudent);
    // document.getElementById('show').addEventListener('click', showStudents);

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
        console.log('createStudent() started');
        //ask for details
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        //Get the checked radio buttons. We use querySelector because we
        let radios = document.querySelector('input[type=radio]:checked');

        //Get checkboxes
        let boxes = document.querySelectorAll('input[type=checkbox]:checked');

        console.log(boxes);

        // Do some checks
        if(name === '' || age === ''){
            //checking for empty values. Show error alert
            addAlert(false, 'An error has happened');
        }else{
            //Everything is good. Continue to save student
            let student = new Student(name, age, radios.value);
            //Add all courses
            for(let c of boxes){
                student.addCourse(c.value);
            }

            // Done. Add to list\
            listStudents.push(student);

            //Add file to localstorage
            //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            //TLDR: Save the variable in a sessionStorage that is shared between pages
            //Only strings are allowed -> JSON.stringify
            sessionStorage.setItem('list', JSON.stringify(listStudents));

            //Alert toevoegen
            addAlert(true, 'Student is successfully registered');
        }

        console.log(listStudents);


    }

    function showStudents(){
        // let div = document.getElementById('content');
        // for(let s of listStudents){
        //     let p = document.createElement('p');
        //     p.innerHTML = s.showStudent();
        //     div.appendChild(p);
        // }
    }

    function addAlert(status, message){
        //Function to add error or succes alert
        let content = '';
        if(status){
            //success
            content = `<div class="alert alert-success" role="alert">
 ${message}
</div>`
        }else{
            //Error
            content = `<div class="alert alert-danger" role="alert">
  ${message}
</div>`
        }

        //Add content to messages div
        document.getElementById('messages').innerHTML = content;
    }


};
