// make a computerPLay function that will randomly return paper, rock, scissors

// Write a function that plays a single round of Rock Paper Scissors, with two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// Play five rounds

const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');


choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = (e) => {
    // playRound(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
    console.log(e)
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', computerPlay)
    choicesDisplay.appendChild(button)
    
  })

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection + computerSelection) {
        case 'ScissorsPaper':
        case 'RockScissors': 
        case 'PaperRock':
            resultDisplay.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 'PaperScissors':
        case 'ScissorsRock': 
        case 'RockPaper':
            resultDisplay.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case 'ScissorsScissors':
        case 'RockRock':
        case 'PaperPaper':
            resultDisplay.innerHTML = "ITS A DRAW!";
            break;
    }
  }

