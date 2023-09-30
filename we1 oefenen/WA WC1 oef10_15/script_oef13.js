'use strict';

let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let passwordCheck = document.getElementById('password_check');
let email = document.getElementById('email');
let age = document.getElementById('age');
let agree = document.getElementById('agree');
let feedback = document.getElementById('feedback');

form.addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  let feedback = 'Registratie gelukt';

  if(username.value.length < 3){
    feedback = 'Je username moet minstens 3 karakters lang zijn';
    updateColor(username);
  }else{
    updateColor(username, 0);
  }

  if(password.value.length < 6 || password.value != passwordCheck.value){
    feedback = 'Je wachtwoord moet minstens 6 karakters lang zijn en overeen komen met de check';
    updateColor(password);
    updateColor(passwordCheck);
  }else{
    updateColor(password, 0);
    updateColor(passwordCheck, 0);
  }

  let birthday = new Date(age.value);

  if(calculateAge(birthday) < 18){
    feedback = 'Je bent nog geen 18';
    updateColor(age);
  }else{
    updateColor(age, 0);
  }

  if(agree.checked != true){
    feedback = 'Gelieve het eens te zijn met onze voorwaarden';
  }

  feedback.innerHTML = feedback;
}

function calculateAge(dob){
  let diff = Date.now() - dob.getTime();
  let age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
}

function updateColor(field, red = true){
  if(red){
    field.style = "background-color: red;";
  }else{
    field.style = "background-color: none;";
  }
}
