/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;
// Call the init function
init();

/* Create a function to start
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
*/

// Random number from 1 to 6
//dice = Math.floor(Math.random() * 6) + 1;

//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

// It shows the italics number
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Get the value to the console
/*
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

/*
function btn() {
    // Do something here
}
btn();
*/

document.querySelector('.btn-roll').addEventListener('click', function() {
    // gameplaying = true of false
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
        // Add score
        //roundScore = roundScore + dice;
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Add CURRENT score to GLOBAL score
        //score[activePlayer] = score[activePlayer] + roundScore;
        scores[activePlayer] += roundScore;
    
        // 2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // 3. Check if the player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        
            document.querySelector('.dice').style.display = 'none';
        
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // block the game after player won
            gamePlaying = false;
        } else {
                // Next player
                nextPlayer();
        }
    }    
});

function nextPlayer() {
        /*
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
    
        // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        // Use the toogle    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}

// Click the btn new and call the init function
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    // Set the game to true at the first
    gamePlaying = true;
    
    // The middle dice is gone from the page
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // Add Player 1 to active
    document.querySelector('.player-0-panel').classList.add('active');
};