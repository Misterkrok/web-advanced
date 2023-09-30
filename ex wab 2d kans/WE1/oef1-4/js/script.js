'use strict';


let controleerleeftijd = (event) => {
    event.preventDefault();

    let leeftijd = document.getElementById('leeftijd').value;

    if (leeftijd <18) {
        alert('Je bent te jong');
    } else {    
        alert('Je bent oud genoeg');
    }
}

let form = document.getElementById('form');
form.addEventListener('submit', controleerleeftijd);
