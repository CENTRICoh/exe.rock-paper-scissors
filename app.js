var userChoice = prompt('Please enter Rock, Paper or Scissors.');
userChoice = userChoice.toLowerCase();

if (userChoice === 'rock' || userChoice === 'paper' 
    || userChoice === 'scissors') {
    document.write('You picked ' + userChoice + '<br />' )
} else {
    document.write('Please pick something specified.')
}

var computerPick = Math.random();
var computerChoice = 'scissors';
if (computerPick < 0.34) {
    computerChoice = 'rock';
} else if (computerPick <= 0.66 ) {
    computerChoice = 'paper';
} 

document.write('The computer picked:' + computerChoice + '<br />');

var compare  = function(choice1, choice2) {
    if(choice1 === choice2) {
       return 'its a tie'; 
    }
    if(choice1 === 'rock') {
        if (choice2 === 'paper') {
            return 'the computer won'
        } else {
            return 'YOU ONE !!!'
        }
    }
if (choice1 === 'scissors') {
    if (choice2 === 'rock') {
        return 'the computer won!';
    } else {
        return 'you won!'

    }
}
}

var winner = compare(userChoice, computerChoice)

document.write('The winner is: ' + winner )
