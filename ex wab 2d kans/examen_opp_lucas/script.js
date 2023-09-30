document.addEventListener('DOMContentLoaded', () => {
    const playerName = localStorage.getItem('playerName');
  
    if (playerName) {
      showPlayerName(playerName);
      showStartGameButton();
    } else {
      showEnterNameButton();
    }
  
    document.querySelector('#player1 .name_button').addEventListener('click', handleButtonClick);
  });
  
  async function handleButtonClick() {
    const playerName = localStorage.getItem('playerName');
  
    if (!playerName) {
      const name = prompt('Enter your name:');
      if (name) {
        localStorage.setItem('playerName', name);
        showPlayerName(name);
        showStartGameButton();
      }
    } else {
      const drawPile1 = document.querySelector('#player1 .draw_pile');
      const drawPile2 = document.querySelector('#player2 .draw_pile');
  
      if (drawPile1.textContent === '0' && drawPile2.textContent === '0') {
        resetGame();
      } else {
        await playNext();
      }
    }
  }
  
  function showEnterNameButton() {
    const button = document.querySelector('#player1 .name_button');
    button.textContent = 'Enter Name';
  }
  
  function showPlayerName(playerName) {
    const playerHeading = document.querySelector('#player1 h2');
    playerHeading.textContent = `Speler 1: ${playerName}`;
  }
  
  function showStartGameButton() {
    const button = document.querySelector('#player1 .name_button');
    button.textContent = 'Start Game';
  }
  
  async function playNext() {
    const card1 = document.querySelector('.battlefield .card:nth-child(1)');
    const card2 = document.querySelector('.battlefield .card:nth-child(3)');
  
    card1.classList.remove('winner-animation');
    card2.classList.remove('winner-animation');
  
    const cardData1 = await fetchCard();
    const cardData2 = await fetchCard();
  
    card1.style.backgroundImage = `url(${cardData1.image})`;
    card2.style.backgroundImage = `url(${cardData2.image})`;
  
    const result = compareCards(cardData1, cardData2);
  
    if (result > 0) {
      card1.classList.add('winner-animation');
      updateDiscardPile(1, 2);
    } else if (result < 0) {
      card2.classList.add('winner-animation');
      updateDiscardPile(2, 1);
    } else {
      updateDiscardPile(1, 0);
      updateDiscardPile(2, 0);
    }
  
    setTimeout(() => {
      card1.style.backgroundImage = '';
      card2.style.backgroundImage = '';
    }, 2000);
  }
  
  async function fetchCard() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await response.json();
    return data.cards[0];
  }
  
  function compareCards(card1, card2) {
    const ranks = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
  
    const rank1 = ranks[card1.value];
    const rank2 = ranks[card2.value];
  
    if (rank1 !== rank2) {
      return rank1 - rank2;
    } else {
      if (card1.value === 'K' && card2.value === 'A') {
        return -1; // card2 is Ace (A), so it is higher
      } else if (card1.value === 'A' && card2.value === 'K') {
        return 1; // card1 is Ace (A), so it is higher
      } else if (card1.value === 'K' || card1.value === 'Q') {
        return 1; // card1 is king or queen, so it is higher
      } else if (card2.value === 'K' || card2.value === 'Q') {
        return -1; // card2 is king or queen, so it is higher

      } else {
        const suits = ['SPADES', 'CLUBS', 'DIAMONDS', 'HEARTS'];
        const suit1 = suits.indexOf(card1.suit);
        const suit2 = suits.indexOf(card2.suit);
        return suit1 - suit2;
      }
    }
  }
  
  function updateDiscardPile(winningPlayerIndex, losingPlayerIndex) {
    const winningDrawPile = document.querySelector(`#player${winningPlayerIndex} .draw_pile`);
    const winningDiscardPile = document.querySelector(`#player${winningPlayerIndex} .discard_pile`);
    const losingDrawPile = document.querySelector(`#player${losingPlayerIndex} .draw_pile`);
    const losingDiscardPile = document.querySelector(`#player${losingPlayerIndex} .discard_pile`);
  
    winningDrawPile.textContent = parseInt(winningDrawPile.textContent) - 1;
    winningDiscardPile.textContent = parseInt(winningDiscardPile.textContent) + 2;
  
    if (losingDrawPile.textContent !== '0') {
      losingDrawPile.textContent = parseInt(losingDrawPile.textContent) - 1;
    } else {
      shuffleDiscardPile(losingPlayerIndex, winningPlayerIndex);
    }
  
    if (winningDrawPile.textContent === '0') {
      shuffleDiscardPile(winningPlayerIndex, losingPlayerIndex);
    }
  
    if (losingDrawPile.textContent === '0' && winningDrawPile.textContent === '0') {
      const button = document.querySelector('#player1 .name_button');
      button.textContent = 'Start Game';
  
      const message = document.createElement('div');
      message.className = 'message';
      message.textContent = 'Game Over!';
      document.getElementById('gameboard').appendChild(message);
    }
  }
  
  async function shuffleDiscardPile(playerIndex, otherPlayerIndex) {
    const discardPile = document.querySelector(`#player${playerIndex} .discard_pile`);
    const drawPile = document.querySelector(`#player${playerIndex} .draw_pile`);
    const discardPileCount = parseInt(discardPile.textContent);
  
    const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${discardPileCount}`);
    const data = await response.json();
  
    drawPile.textContent = discardPileCount;
    discardPile.textContent = '0';
  
    const otherDrawPile = document.querySelector(`#player${otherPlayerIndex} .draw_pile`);
    otherDrawPile.textContent = '26';
  }
  
  function resetGame() {
    localStorage.removeItem('playerName');
    const playerHeading = document.querySelector('#player1 h2');
    playerHeading.textContent = 'Speler 1: Naam';
  
    const drawPile1 = document.querySelector('#player1 .draw_pile');
    const drawPile2 = document.querySelector('#player2 .draw_pile');
    const discardPile1 = document.querySelector('#player1 .discard_pile');
    const discardPile2 = document.querySelector('#player2 .discard_pile');
  
    drawPile1.textContent = '26';
    drawPile2.textContent = '26';
    discardPile1.textContent = '0';
    discardPile2.textContent = '0';
  
    const message = document.querySelector('.message');
    if (message) {
      message.remove();
    }
  
    showEnterNameButton();
  }