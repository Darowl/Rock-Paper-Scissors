const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const message = document.querySelector('#game-over')
let choices = ['Rock', 'Paper' ,'Scissors']

const game = (input) => {
    playRound(input, choices[Math.floor(Math.random() * choices.length)]);

    if(yourScoreSpan.innerHTML === "5"){
        gameOver('Winn', yourScoreSpan, computerScoreSpan)

    } else if (computerScoreSpan.innerHTML === "5") {
        gameOver('Loose', yourScoreSpan, computerScoreSpan)
    }
}

const gameOver = (winner, resetScore1, resetScore2) => {
    const winnerText = document.getElementById('message-text');
    winnerText.innerHTML = `You <span>${winner}</span> This Round`;

    const button = document.getElementById('message-btn');
    button.innerText = 'Play Another Round';

    button.addEventListener('click', () => {
        resetScore1.innerText = '0';
        resetScore2.innerText = '0';
        choicesDisplay.classList.remove('remove')
        message.classList.add('remove')

    })
    
    message.classList.remove('remove')
    choicesDisplay.classList.add('remove')
    resultDisplay.innerHTML = ' ';

    
}

const incrementScore = (scoreSpan) => { 
    if (scoreSpan.innerText < 5) {
        scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
    } else {
        return scoreSpan.innerText;
    }
}

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection + computerSelection) {
        case 'ScissorsPaper':
        case 'RockScissors': 
        case 'PaperRock':
            resultDisplay.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
            incrementScore(yourScoreSpan)
            break;
        case 'PaperScissors':
        case 'ScissorsRock': 
        case 'RockPaper':
            resultDisplay.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
            incrementScore(computerScoreSpan)
            break;
        case 'ScissorsScissors':
        case 'RockRock':
        case 'PaperPaper':
            resultDisplay.innerHTML = "ITS A DRAW!";
            break;
    }
  }

