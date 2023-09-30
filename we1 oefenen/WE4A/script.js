'use strict'

let randnum = Math.floor(Math.random()*20)+1;

 document.getElementById('form').addEventListener('submit', (form) => {
    form.preventDefault();

let inputnum = document.getElementById('inputnum').value;
compareNumber(inputnum)
.then((result) => {
    alert(result);
}
)
.catch((error) => {
    alert(error);
}
) 
});

let compareNumber = (inputnum) => {
     return new Promise((resolve, reject) => {
        if(inputnum == randnum){
            resolve("jij ben juist")
        }else if(inputnum > randnum && inputnum > 0 && inputnum <= 20){
            resolve("antwoord is kleiner mother fucker")
        } else if(inputnum < randnum && inputnum > 0 && inputnum <= 20){
            resolve("antwoord is groter jij bitch")
        }else {
            reject("antwoord tussen 1 en 20")
        }
    })
}

