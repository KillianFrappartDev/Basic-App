const nextBtn = document.querySelector('.nextPlayer');
const player = document.querySelector('.player');
const bot = document.querySelector('.bot');
const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const playerCard = document.getElementById('player--card');
const botCard = document.getElementById('bot--card');
const board = document.querySelector('.board');
const startBtn = document.querySelector('.startBtn');
const welcomeDiv = document.querySelector('.playGame');
const playerMoney = document.querySelector('.player-cash');
const instructions = document.querySelector('.instruction');
const betBox = document.querySelector('.player-bet');
const bet100 = document.querySelector('.bet-100');
const bet200 = document.querySelector('.bet-200');
const bet500 = document.querySelector('.bet-500');
const playerShowMoney = document.getElementById('player-bank');

let gameOn = false;
let playerBet = 0;
let playerBank = 1000;

var randomNumOne, randomNumTwo;








/* ---------- Step 1 ------------- */

// Init
startBtn.addEventListener('click', function () {

    // Welcome
    welcomeDiv.classList.add('animated', 'fadeOut');

    // Board FadeIn
    board.classList.remove('hide');
    board.classList.add('animated', 'fadeIn');

    // Button draw FadeIn
    nextBtn.classList.remove('hide');
    nextBtn.classList.add('animated', 'fadeIn');

    // Player money FadeIn
    playerMoney.classList.remove('hide');
    playerMoney.classList.add('animated', 'fadeIn');


    //Instructions fadeIn
    instructions.classList.remove('hide');
    instructions.classList.add('animated', 'fadeIn');

});





/* ---------- Step 2 ------------- */

// Player get random card & bot get card-0
nextBtn.addEventListener('click', function () {
    drawCard();

});

let drawCard = function () {


    if (!gameOn) {
        randomNumOne = Math.floor(Math.random() * 13 + 1);
        console.log(randomNumOne);

        playerCard.setAttribute('src', 'cards/C-' + randomNumOne + '.png');
        botCard.setAttribute('src', 'cards/C-0.png');

        instructions.textContent = 'Make your bet';
        nextBtn.textContent = 'BET';

        betBox.classList.remove('hide');
        betBox.classList.add('animated', 'fadeIn');

        gameOn = true;

    } else {
        if (playerBet > 0) {
            randomNumTwo = Math.floor(Math.random() * 13 + 1);
            botCard.setAttribute('src', 'cards/C-' + randomNumTwo + '.png');

            if (randomNumOne > randomNumTwo) {
                instructions.textContent = 'You win!';
                playerBank += playerBet;
                playerShowMoney.textContent = playerBank + "$";
            } else if (randomNumTwo > randomNumOne) {
                instructions.textContent = 'You loose ...';
                playerBank -= playerBet;
                playerShowMoney.textContent = playerBank + "$";
            } else {
                instructions.textContent = 'Equality';
            }

            nextBtn.textContent = "PLAY AGAIN";
            gameOn = false;

        } else {
            instructions.textContent = 'You have to bet first !';
            drawCard();
        }






    }
}

// Bet 100 - 200 - 500
bet100.addEventListener('click', function (e) {
    bet200.classList.remove('bet-active');
    bet500.classList.remove('bet-active');

    bet100.classList.add('bet-active');
    playerBet = 100;
});

bet200.addEventListener('click', function (e) {
    bet100.classList.remove('bet-active');
    bet500.classList.remove('bet-active');

    bet200.classList.add('bet-active');
    playerBet = 200;

});

bet500.addEventListener('click', function (e) {
    bet200.classList.remove('bet-active');
    bet100.classList.remove('bet-active');

    bet500.classList.add('bet-active');
    playerBet = 500;

});




/* ---------- Step 3 ------------- */

// SetTimeout

// Bot shows random card

// SetTimeout

// Cards display none

// Money update