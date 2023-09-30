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
username.addEventListener('blur', checkUsername);
password.addEventListener('blur', checkPassword);
passwordCheck.addEventListener('blur', checkPassword);
age.addEventListener('blur', checkAge);

function submitForm(e){
  e.preventDefault();
  let feedbackMessage = '';

  let test = checkUsername();
  if(test != '') feedbackMessage = test;

  test = checkPassword();
  if(test != '') feedbackMessage = test;

  test = checkAge();
  if(test != '') feedbackMessage = test;

  if(agree.checked != true){
    feedbackMessage = 'Gelieve het eens te zijn met onze voorwaarden';
  }

  if(feedbackMessage == ''){
    feedbackMessage = 'Registratie gelukt';
  }

  feedback.innerHTML = feedbackMessage;
}

function updateColor(field, red = true){
  if(red){
    field.style = "background-color: red;";
  }else{
    field.style = "background-color: none;";
  }
}

function checkUsername(){
  if(username.value.length < 3){
    updateColor(username);
    return 'Je username moet minstens 3 karakters lang zijn';
  }else{
    updateColor(username, 0);
    return '';
  }
}

function checkPassword(){
  if(password.value.length < 6 || password.value != passwordCheck.value){
    updateColor(password);
    updateColor(passwordCheck);
    return 'Je wachtwoord moet minstens 6 karakters lang zijn en overeen komen met de check';
  }else{
    updateColor(password, 0);
    updateColor(passwordCheck, 0);
    return '';
  }
}

function checkAge(){
    let birthday = new Date(age.value);

    if(calculateAge(birthday) < 18){
      updateColor(age);
      return 'Je bent nog geen 18';
    }else{
      updateColor(age, 0);
      return '';
    }
}

function calculateAge(dob){
  let diff = Date.now() - dob.getTime();
  let age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
}
