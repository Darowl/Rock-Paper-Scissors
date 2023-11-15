const playButton = document.getElementById('play-button');
const sections = document.querySelectorAll('section');
const choicesButton = document.querySelectorAll('.choices-btn');
const computerChoiceDisplay = document.querySelector('.bot-choice-container');
const playerChoiceDisplay = document.querySelector('.player-choice-container');
const scorePlayer = document.getElementById('player-score');
const scoreComputer = document.getElementById('bot-score')
const winnerText = document.getElementById('remark');
const restartButton = document.querySelector('#restart')

let points = 2;
let choices = ['rock', 'paper' ,'scissors']

const game = (inputPlayer) => {;
    const inputChoice = choices[Math.floor(Math.random() * choices.length)];

    
    setTimeout(() => {
        displayChoices(inputPlayer, inputChoice);
        playRound(inputPlayer, inputChoice, scorePlayer, scoreComputer,displayResult)
      }, 200);

    function displayChoices(playerChoice, computerChoice) {
        playerChoiceDisplay.classList.remove('hide');
        computerChoiceDisplay.classList.remove('hide');
    
        playerChoiceDisplay.firstChild.className = `choice-${playerChoice}`;
        computerChoiceDisplay.firstChild.className = `choice-${computerChoice}`;
    }

    function displayResult(winner) {
        sections[2].classList.toggle('hide');
        sections[3].classList.toggle('hide');

        if(winner == 'player-score') {
            winnerText.textContent = 'win';
            winnerText.id = 'loose';
        } else if(winner == 'bot-score') {
            winnerText.textContent = 'loose';
            winnerText.id = 'loose';
        }
    }
}

const playRound = (playerSelection, computerSelection, scorePlayer, scoreComputer, resultFunction) => {
    switch (playerSelection + '-' + computerSelection) {
        case 'scissors-paper':
        case 'rockc-scissors': 
        case 'paper-rock':
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
            incrementScore(scorePlayer);
            break;
        case 'paper-scissors':
        case 'scissors-rock': 
        case 'rock-paper':
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            incrementScore(scoreComputer);
            break;
        case 'scissors-scissors':
        case 'rock-rock':
        case 'paper-paper':
            console.log('"ITS A DRAW!"')
            break;
    }

    function incrementScore(scoreWinner) {
        let value = parseInt(scoreWinner.textContent, 10);
        value++;
        scoreWinner.textContent = value;
        if(value >= points) {
            return resultFunction(scoreWinner.id);
            // return setTimeout(() => {
            //     resultFunction(scoreWinner.id)
            //   }, 1000);
        }
        return;   
    }
}

playButton.addEventListener('click', () => {
    sections[0].classList.toggle('hide')
    sections[1].classList.toggle('hide')
    sections[2].classList.toggle('hide')
})

restartButton.addEventListener('click', () => {
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;
    playerChoiceDisplay.classList.add('hide');
    computerChoiceDisplay.classList.add('hide');
    playerChoiceDisplay.firstChild.className = 'null';
    computerChoiceDisplay.firstChild.className = 'null';
    sections[2].classList.toggle('hide');
    sections[3].classList.toggle('hide');
})

