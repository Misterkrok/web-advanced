'use strict'

window.addEventListener('load', () => {
    console.log('DOM loaded');
// De speler moet zoeken naar een onbekend woord
//De speler ziet uit hoeveel letters het woord bestaat
//Elke ronde mag de speler een letter gokken
//Als de gegokte letter in het woord zit worden alle voorkomens van die letter aan de speler getoont
//Als de gegokte letter niet in het woord zit verliest de speler een leven
//De speler heeft 5 levens
//De speler wint als die alle letters kan vinden
//De speler verliest als er nog onbekende letters zijn nadat alle levens op zijn
let correctGuesses = 0;
let word = 'olifant';
let wrongGuesses = 0;
let lives = 5;
let guesses = 0;
let knop = document.getElementById('knop');
// neem de gegeven naam en steek die in de localstorage en stuurt een welkom bericht door wanneer je op de start button klikt 
// code genomen van in mijn files (oude code)
if(localStorage.getItem('naam') == null){
    knop.innerHTML = '<button id="knopje" onclick="naamInvoeren()">Start spell</button>';
    document.getElementById('knopje').addEventListener('click', () => {
        let username = prompt('What is your username?');
          localStorage.setItem('naam', username);
          alert('Welcome ' + username);
          document.getElementById('spelernaam').innerHTML = `Speler 1: ${localStorage.getItem('naam')}`;
          });
}
else {
    knop.innerHTML = '<button id="start">start spell</button>';
    document.getElementById('spelernaam').innerHTML = `Speler 1: ${localStorage.getItem('naam')}`;
    ///////////
    setTimeout(function() {
        alert('Welcome back ' + localStorage.getItem('naam'));
    }, 1000);
}
document.getElementById('start').addEventListener('click', () => {
   guesses++;
   let randomwrd=  fetch(' https://www.webadvanced.be/galgje/')
    randomwrd.then(response => response.json())
    randomwrd.then(data => {
            let inputletter = document.getElementById('inputletter');
            let letter = inputletter.value;
            
            if (letter == '') {
                alert('Please enter a letter');
                return;
            }else if (letter.length > 1) {
                alert('Please enter only one letter');
                return;
            }
            // check if the letter has already been guessed
            if (guessedLetters.includes(letter)) {
                alert('You have already guessed this letter');
                return;
            }
           
            // check if the letter is in the word
            if (word.includes(letter)) {
                // loop through the word 
                
                for (let i = 0; i < word.length; i++) {
                    // check if the letter is equal to the current letter in the word
                    if (letter == word[i]) {
                        // replace the underscore with the letter
                        underscores[i] = letter;
                        // increase the amount of correct guesses
                       
                    }
                }
                // add the letter to the guessed letters array
                guessedLetters.push(letter);
                // check if the amount of correct guesses is equal to the length of the word
                if (correctGuesses == word.length) {
                    // display the word
                    document.getElementById('randomwoord').innerHTML = underscores.join(' ');
                    // display the amount of guesses
                    document.getElementById('guesses').innerHTML = `You guessed the word in ${guesses} guesses`;
                    // display the win message
                    document.getElementById('message').innerHTML = 'You win!';
                    // disable the input field
                    inputletter.disabled = true;
                    // disable the button
                    document.getElementById('button').disabled = true;
                }
            } else {
                // add the letter to the guessed letters array
                guessedLetters.push(letter) , wrongGuesses++;;
                // increase the amount of wrong guesses
               
                // check if the amount of wrong guesses is equal to the amount of lives
                if (wrongGuesses == lives) {
                    // display the word
                    document.getElementById('randomwoord').innerHTML = word.join(' ');
                    // display the amount of guesses
                    document.getElementById('guesses').innerHTML = `You guessed the word in ${guesses} guesses`;
                    // display the lose message
                    document.getElementById('message').innerHTML = 'You lose!';
                    // disable the input field
                    inputletter.disabled = true;
                    // disable the button
                    document.getElementById('button').disabled = true;
                }
            } 
           
            // display the word
            document.getElementById('randomwoord').innerHTML = underscores.join(' ') , correctGuesses++;
            // display the guessed letters
            document.getElementById('guessedLetters').innerHTML = `Guessed letters: ${guessedLetters.join(', ')}`;
            // clear the input field
           
        });
    });
    // create a variable to store the word
        

        // create an array with the same length as the word and fill it with underscores
        let underscores = new Array(word.length).fill('_');
        // create an array to store the guessed letters
        let guessedLetters = [];
        console.log(guesses);
        console.log(correctGuesses)

        });
        