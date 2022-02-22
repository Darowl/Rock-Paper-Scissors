const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    if (randomNumber === 1){
      return 'Rock'
    }
    if (randomNumber === 2){
      return 'Paper'
    }
    if (randomNumber === 3) {
      return 'Scissors'
    }
}



const userPlay = () => {
  let userSelection = prompt('What is your choice');
  switch(userSelection) {
    case "rock":
      return "Rock";
      break;
    case "ROCK":
      return "Fock";
      break;
    case "paper":
      return "Paper";
      break;
    case "PAPER":
      return "Paper";
    case "scissors":
      return "Scissors";
      break;
    case "SCISSORS":
      return "Scissors";
  }
} 

function playRound(playerSelection,computerSelection) {
    if (computerSelection === playerSelection) {
       return "It's a draw";
    } 
    else if  (computerSelection === 'Rock' && playerSelection === 'Paper') {
      return 'You Win! Paper beats Scissors';
    } 
    else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
      return 'You Lose! Rock beats Scissors';
    } 
    else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
      return 'You Win! Scissors beats Paper';
    } 
    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
      return 'You Lose! Paper beats Rock';
    } 
    else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
      return 'You Win! Rock beats Scissors'
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
      return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === undefined) {
      return 'Please write a valid option '
    }
};

computerSelection = computerPlay();
playerSelection = userPlay();

function game(n) {
  for(let i = 1; i < n; i++) { 
    userPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}


game(2);

console.log('The computer chosed ' + computerSelection)
console.log('You chosed ' + playerSelection)