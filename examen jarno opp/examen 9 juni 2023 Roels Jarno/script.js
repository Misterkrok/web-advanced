'use strict';


// wait until html page is loaded
window.addEventListener('load', function () {
    console.log('script loaded');

    /* check in the localstorage if the user has already visited the page, else make an alert to ask for his username and store in localstorage when clicking on the button */
    let knop = document.getElementById('knop');
    // help from chatgpt for the async function
    if (localStorage.getItem('usernameOorlogje') == null) {
        knop.innerHTML = '<button id="knopje">Geef naam in</button>';
        document.getElementById('knopje').addEventListener('click', () => {
          let username = prompt('What is your username?');
          localStorage.setItem('usernameOorlogje', username);
          alert('Welcome ' + username);
          knop.innerHTML = '<button id="start">start spell</button>';
          document.getElementById('spelernaam').innerHTML = `Speler 1: ${localStorage.getItem('usernameOorlogje')}`;
          });
      }
      
      else {
        knop.innerHTML = '<button id="start">start spell</button>';
        document.getElementById('spelernaam').innerHTML = `Speler 1: ${localStorage.getItem('usernameOorlogje')}`;
        ///////////
        setTimeout(function() {
            alert('Welcome back ' + localStorage.getItem('usernameOorlogje'));
        }, 100);
    }
    this.document.getElementById('start').addEventListener('click', () => {
        knop.innerHTML = '<button id="volgende">volgende</button>';
    // fetch deck shuffle from api
    let deckId;
    let remaining;
    let drawpile1;
    let drawpile2;
    let discard_pile1;
    let discard_pile2;
    this.fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
        .then(response => response.json())
        .then(data => {
            remaining = data.remaining;
            ////// get drawpile&discard pile this is used 2 times if further used => make function 
            drawpile1 = this.document.getElementById('draw_pile1').innerHTML = remaining/2;
            drawpile2 = this.document.getElementById('draw_pile2').innerHTML = remaining/2;
            discard_pile1 = this.document.getElementById('discard_pile1').innerHTML = 52 - remaining/2;
            discard_pile2 = this.document.getElementById('discard_pile2').innerHTML = 52 - remaining/2;
            deckId = data.deck_id;
        }
        )
        let volgende = document.getElementById('volgende');
        let timeoutId;
        let timeoutId2;
        let pointsp1 = 0;
        let pointsp2 = 0;
        volgende.addEventListener('click', () => {
            this.fetch(`https://deckofcardsapi.com/api/deck/${deckId }/draw/?count=2`)
            .then(response => response.json())
            .then(data => {
                remaining = data.remaining;
                ////// get drawpile&discard pile this is used 2 times if further used => make function 
                drawpile1 = this.document.getElementById('draw_pile1').innerHTML = remaining/2;
                drawpile2 = this.document.getElementById('draw_pile2').innerHTML = remaining/2;
                discard_pile1 = this.document.getElementById('discard_pile1').innerHTML = 52 - remaining/2;
                discard_pile2 = this.document.getElementById('discard_pile2').innerHTML = 52 - remaining/2;
                // get cardp1 and cardp2 from api
                this.document.getElementById('cardp1').innerHTML = `<img class="cards" src="${data.cards[0].image}" alt="card">`;
                this.document.getElementById('cardp2').innerHTML = `<img class="cards" src="${data.cards[1].image}" alt="card">`;
                // display the cards only 2s long, then hide them again
                this.document.getElementById('cardp1').style.display = 'block';
                this.document.getElementById('cardp2').style.display = 'block';
                clearTimeout(timeoutId); // Clear the previous timeout
                timeoutId = setTimeout(function() { // Store the new timeout ID
                    document.getElementById('cardp1').style.display = 'none';
                    document.getElementById('cardp2').style.display = 'none';
                }, 5000);
                clearTimeout(timeoutId2);
                let player1 = document.getElementById('player1');
                let player2 = document.getElementById('player2');
                     // Clear the previous timeout
                timeoutId2 = setTimeout(function() { 
                    player1.classList.remove('win');
                    player2.classList.remove('win');
                }, 2000);
                // check who wins & display the winner with a color change in css
                if ((bepaalWinnaar(data.cards[0], data.cards[1])) == 1) {
                    player1.classList.add('win');
                    console.log('speler 1 wint');
                    pointsp1++;
                }
                else if ((bepaalWinnaar(data.cards[0], data.cards[1])) == 2){
                    player2.classList.add('win');
                    console.log('speler 2 wint');
                    pointsp2++;
                }
                else {
                    console.log('gelijkspel');
                }

            })
        })
        // display the winner when done
        if (remaining == 0){
            if (pointsp1 > pointsp2){
                alert('speler 1 wint');
            }
            else if (pointsp1 < pointsp2){
                alert('speler 2 wint');
            }
            else {
                alert('gelijkspel');
            }
            // when 0 remaining reshuffle the draw pile
            this.fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
            .then(response => response.json())
            .then(data => {
                remaining = data.remaining;
                ////// get drawpile&discard pile this is used 2 times if further used => make function 
                drawpile1 = this.document.getElementById('draw_pile1').innerHTML = remaining/2;
                drawpile2 = this.document.getElementById('draw_pile2').innerHTML = remaining/2;
                discard_pile1 = this.document.getElementById('discard_pile1').innerHTML = 52 - remaining/2;
                discard_pile2 = this.document.getElementById('discard_pile2').innerHTML = 52 - remaining/2;
            }
            )
            
        }

    });

    const bepaalWinnaar = (kaart1, kaart2) => {
        const kaartWaarden = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
        const kleuren = ['S', 'D', 'C', 'H'];
      
        // Bepaal de waarde van de kaarten
        const waarde1 = kaartWaarden.indexOf(kaart1.value);
        const waarde2 = kaartWaarden.indexOf(kaart2.value);
      
        // Vergelijk de waarden van de kaarten
        if (waarde1 > waarde2) {
          return 1;
        } else if (waarde1 < waarde2) {
          return 2;
        } else {
          // Als de waarden gelijk zijn, vergelijk dan de kleuren
          const kleur1 = kleuren.indexOf(kaart1.suit);
          const kleur2 = kleuren.indexOf(kaart2.suit);
      
          if (kleur1 > kleur2) {
            return 1;
          } else if (kleur1 < kleur2) {
            return 2;
          } else {
            return 0;
          }
        }
    }
    
      
}
);


