"use strict";

// Function (getComputerChoice) -> Get a random choice from the computer between rock,paper, and scissors. 
    // get random number from 1 to 3 then use switch to assign rock, paper or scissors
function getComputerChoice() {
    let random = Math.ceil(Math.random() * 3 );
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

let playerChoice = prompt('Pick between rock, paper and scissors.')
playerChoice = playerChoice.toLowerCase();

// Function -> Play a single round of rock, paper, scissors. params(playerSelection, computerSelection). 
    //Returns a string that declares the winner
    //playerSelection should be case sensitive
    // If there is a tie, replay the round

function playRound(playerSelection, computerSelection) {
    let result;
    let repeat = true;
    let count = 0;

    do {
        if (count > 0) {
            playerSelection = prompt('Please choose the allowed values only (rock, paper or scissors)')
            playerSelection = playerSelection.toLowerCase()
        }
        repeat = false;
        if (playerSelection === computerSelection) {
            result = 'It\'s a tie.'
        } else if (playerSelection == 'rock') {
            result = computerSelection == 'scissors' ? 'You win! :) Rock beats scissors.' : 'You lose :( Paper beats rock!';
        } else if (playerSelection == 'paper') {
            result = computerSelection == 'rock' ? 'You win! :) Paper beats rock.' : 'You lose :( Scissors beats paper';
        } else if (playerSelection =='scissors') {
            result = computerSelection == 'paper' ? 'You win! :) Scissors beats paper.' : 'You lose :( Rock beats scissors'
        } else {
            repeat = true;
            count++;
        }
    } while (repeat == true)
    
    return result;
}

// console.log(playRound(playerChoice, getComputerChoice()))
// console.log(getComputerChoice())
// Function(game) -> Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
    //use loops to play five times
    // This function uses other functions in it's code