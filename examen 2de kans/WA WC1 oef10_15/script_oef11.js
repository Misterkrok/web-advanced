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
  let correct = true;

  if(username.value.length < 3){
    correct = false;
  }

  if(password.value.length < 6 || password.value != passwordCheck.value){
    correct = false;
  }

  let birthday = new Date(age.value);

  if(calculateAge(birthday) < 18){
    correct = false;
  }

  if(agree.checked != true){
    correct = false;
  }

  if(correct){
    feedback.innerHTML = 'Registratie gelukt';
  }else{
    feedback.innerHTML = 'Niet alle velden correct';
  }

}

function calculateAge(dob){
  let diff = Date.now() - dob.getTime();
  let age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
}
