'use strict';

window.onload = function() {
 /* fetch the link en zet die als een get parameter https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 */
const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const fetchPromise = fetch(url);
fetchPromise.then(function(response) {
    return response.json();
}).then(function(json) {
    console.log(json);
    const deck_id = json.deck_id;
    console.log(deck_id);
    const url2 = 'https://deckofcardsapi.com/api/deck/' + deck_id + '/draw/?count=2';
    const fetchPromise2 = fetch(url2);
    fetchPromise2.then(function(response) {
        return response.json();
    })
});
function aantalkaarten (deck_id) {
    const url3 = 'https://deckofcardsapi.com/api/deck/' + deck_id + '/draw/?count=2';
    const fetchPromise3 = fetch(url3);
    fetchPromise3.then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        const image1 = json.cards[0].image;
        const image2 = json.cards[1].image;
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        img1.src = image1;
        img2.src = image2;
    })
}

// Verkrijg referenties naar het speelveld, de knop en het dek van kaarten
var gameField = document.getElementById("gameField");
var startButton = document.getElementById("startButton");
var deck = ["Kaart 1", "Kaart 2"]; // Vervang dit met je eigen kaarten

// Functie om de naam van de speler weer te geven in het speelveld
function showPlayerName() {
  // Verkrijg de opgeslagen gebruikersnaam uit de lokale opslag
  var username = localStorage.getItem("username");

  // Verberg de knop en toon de naam van de speler in het speelveld
  startButton.style.display = "none";
  gameField.textContent = "Speler: " + username;
}

// Functie om het spel te starten en kaarten uit te delen
function startGame() {
  // Schud het dek van kaarten
  shuffleDeck(deck);

  // Deel de kaarten uit (hier wordt slechts één kaart getoond als voorbeeld)
  var firstCard = deck[0];
  gameField.textContent = "Speler: " + localStorage.getItem("username") + " - Uitgedeelde kaart: " + firstCard;
}

// Functie om het dek van kaarten te schudden
function shuffleDeck(deck) {
  // Implementeer hier de logica om het dek van kaarten te schudden
  // Dit is slechts een voorbeeld van een eenvoudige shuffle-functie
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

// Controleer of de gebruiker de pagina voor de eerste keer bezoekt
if (!localStorage.getItem("username")) {
  // Toon het naamveld en verberg de knop
  nameField.style.display = "block";
  startButton.style.display = "none";

  // Functie om de naam te vragen en op te slaan
  function askForName() {
    var username = prompt("Voer je naam in:");
    if (username) {
      // Sla de gebruikersnaam op in de lokale opslag van de browser
      localStorage.setItem("username", username);

      // Verberg het naamveld en toon de naam van de speler in het speelveld
      nameField.style.display = "none";
      showPlayerName();

      // Toon de knop "Start Spel"
      startButton.style.display = "block";
    }
  }

  // Koppel de functie aan de klikgebeurtenis van de knop
  nameButton.addEventListener("click", askForName);
} else {
  // Toon de naam van de speler in het speelveld
  showPlayerName();

  // Toon de knop "Start Spel"
  startButton.style.display = "block";
}

// Koppel de functie voor het starten van het spel aan de klikgebeurtenis van de knop
startButton.addEventListener("click", startGame);
}
