/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

var scores, roundScore, activePlayer, gamePlaying, prev, rolls, boob, poop, six, winScore;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    // if game is playing = true
    if (gamePlaying) {
        // 1. rand dice nr
        var dice = Math.floor(Math.random() * 6) + 1;
        // // store prev dice roll in var
        boob = rolls.push(dice);
        poop = rolls.shift();
        prev = rolls[0];
        six = 6;
        // 2. display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. update the round score IF rolled nr was NOT 1
        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        if (prev === six && dice === six) {
            alert('rolled 2 sixes in a row :(');
            scores[activePlayer] = 0;
            // update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // if game is playing = true
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // scores[activePlayer] = scores[activePlayer] + roundScore;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won the game
        // if score >= 100 then win
        if (scores[activePlayer] >= winScore) {
            gamePlaying = false;
            // document.querySelector('.btn-hold').style.display = 'none';
            // console.log('player ' + (activePlayer + 1) + ' has won the game!');
            document.querySelector('#name-' + activePlayer).textContent = 'winrar!';
            // document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

document.getElementById('win-score').addEventListener('change', function() {
    winScore = this.value;
    console.log('winscore' + winScore)
});

function generate() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

    function populate(a) {
        for ( var i = 0; i < 6; i++ ) {
            var x = Math.round( Math.random() * 14 );
            var y = hexValues[x];
            a += y;
        }
        return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round( Math.random() * 360 );

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

    document.querySelector('.random-bg').style.background = gradient;
}

document.onload = generate();

function init() {
    generate();
    winScore = document.getElementById('win-score').value;
    gamePlaying = true;
    rolls = [0,0];
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    // document.querySelector('.btn-hold').style.display = 'block';
    // document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
