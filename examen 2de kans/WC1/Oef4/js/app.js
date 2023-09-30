'use strict';

function controleerLeeftijd(event){
  event.preventDefault();

  let leeftijd = document.getElementById('leeftijd').value;
  if(leeftijd < 18){
    console.log('Je bent te jong');
  }else{
    console.log('Welkom');
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', controleerLeeftijd);
