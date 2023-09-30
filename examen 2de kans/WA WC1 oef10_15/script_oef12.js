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
  }

  if(password.value.length < 6 || password.value != passwordCheck.value){
    feedback = 'Je wachtwoord moet minstens 6 karakters lang zijn en overeen komen met de check';
  }

  let birthday = new Date(age.value);

  if(calculateAge(birthday) < 18){
    feedback = 'Je bent nog geen 18';
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
