const nextBtn = document.querySelector('.nextPlayer');
const player = document.querySelector('.player');
const bot = document.querySelector('.bot');
const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const playerCard = document.getElementById('player--card');
const botCard = document.getElementById('bot--card');
const board = document.querySelector('.board');
const startBtn = document.querySelector('.startBtn');
const welcomeDiv = document.querySelector('.playGame');

startBtn.addEventListener('click', function() {
    welcomeDiv.classList.add('animated', 'fadeOut');
    
    board.classList.remove('hide');
    board.classList.add('animated', 'fadeIn');

    nextBtn.classList.remove('hide');
    nextBtn.classList.add('animated', 'fadeIn');

});



nextBtn.addEventListener('click', function() {
    drawCard();

});

let drawCard = function() {
    var randomNumOne = Math.floor(Math.random() * 13 + 1);
    var randomNumTwo = Math.floor(Math.random() * 13 + 1);

    playerCard.setAttribute('src', 'cards/C-' + randomNumOne + '.png');
    botCard.setAttribute('src', 'cards/C-' + randomNumTwo + '.png');

    if (randomNumOne > randomNumTwo) {
        player.classList.toggle('p-active');
    } else if (randomNumTwo > randomNumOne) {
        bot.classList.toggle('b-active');
    } else {
        player.classList.toggle('p-active');
        bot.classList.toggle('b-active');
    }

}


/* ---------- Step 1 ------------- */

    // Welcome message

    // Board FadeIn

    // Button draw FadeIn

    // Player money FadeIn



/* ---------- Step 2 ------------- */

    // Player get random card & bot get card-0

    // Bet 100 - 200 - 500



/* ---------- Step 3 ------------- */
    
    // SetTimeout

    // Bot shows random card

    // SetTimeout

    // Cards display none

    // Money update