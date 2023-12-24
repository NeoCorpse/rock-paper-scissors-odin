"use strict";

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const allowed = ['rock', 'paper', 'scissors']
const button = document.querySelectorAll('button')
const status = document.querySelector('.status')
const lastRound = document.querySelector('.last')
const theEnd = document.querySelector('.container');
let wins = 0, losses = 0, ties = 0, rounds = 0;
let x;

const round = (e)=> {
    x = playRound(e.target.textContent.toLowerCase(),getComputerChoice());
    if (x.includes('win')) {
        wins++;
        rounds++;
    } else if(x.includes('lose')) {
        losses++;
        rounds++;
    } else if (x.includes('tie')) {
        ties++;
    }

    if (wins == 5) {
        endGame('win');
    } else if (losses == 5) {
        endGame('lose')
    }

    console.log(x)

    lastRound.textContent = x
    status.textContent = `Wins: ${wins}  Losses: ${losses}  Ties: ${ties}`
}


button.forEach((value) => {
    value.addEventListener('click', round)
})

function getComputerChoice() {
    const random = Math.ceil(Math.random() * 3 );
    let choice;
    switch(random) {
        case 1 :
            choice= 'rock';
            break;
        case 2 : 
            choice = 'paper';
            break;
        case 3 : 
            choice = 'scissors'
            break;
        default:
            choice = 'broken code'
    }

    return choice
}

function playRound(playerSelection, computerSelection) {
    let result;
    switch(playerSelection) {
        case 'rock':
            result = computerSelection == 'rock' ? 'It\'s a tie!' :
            computerSelection == 'paper'? 'You lose! Paper beats rock!' : 'You win! Rock beats scissors!'
            break;
        case 'paper':
            result = computerSelection == 'rock' ? 'You win! Paper beats rock' :
            computerSelection == 'paper' ? 'It\'s a tie!' : 'You lose! Scissors beats paper'
            break;
        case 'scissors':
            result = computerSelection == 'rock'? 'You lose! Rock beats scissors' :
            computerSelection == 'paper' ? 'You win! Scissors beats paper': 'It\'s a tie'
            break;
    }
    return result;
}

function endGame(result) {
    if (result == 'win') {
        theEnd.textContent += `Yaay! You won with ${wins} points.`
    } else if (result == 'lose') {
        theEnd.textContent += `Bummer! You lost with ${losses} points.`
    }

    button.forEach((value) => {
        value.removeEventListener('click', round)
    })
}

// button.addEventListener('click', (e)=> {
//     x = playRound(e.target.textContent.toLowerCase(),getComputerChoice());
//     if (x.includes('win')) {
//         wins++;
//         rounds++;
//     } else if(x.includes('lose')) {
//         losses++;
//         rounds++;
//     } else if (x.includes('tie')) {
//         ties++;
//     }

//     if (wins == 5) {
//         endGame('win');
//     } else if (losses == 5) {
//         endGame('lose')
//     }
// }
// )

// function game() {
//     let choice;
//     let wins = 0, losses = 0, ties = 0;
//     let rounds = 0;
//     let x;
//     while (rounds < 5) {
//         choice = prompt('Choose between rock, paper and scissors.').toLowerCase()
//         while (!(allowed.includes(choice))) {
//             choice = prompt(`Please select only the allowed values, that is: ${allowed}`).toLowerCase();
//         }
//         console.log(x = playRound(choice, getComputerChoice()))
//         if (x.includes('win')) {
//             wins++;
//             rounds++;
//         } else if(x.includes('lose')) {
//             losses++;
//             rounds++;
//         } else if (x.includes('tie')) {
//             ties++;
//         }
//     }
//     (wins > losses) ? console.log(`Yaaay!! You won with ${wins} wins, ${losses} losses and ${ties} ties.`) : console.log(`Bummer! You lost with ${wins} wins, ${losses} losses and ${ties} ties.`)
// }