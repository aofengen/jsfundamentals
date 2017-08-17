//Simple guess a number game created in weekend Intro to Coding course; prompt command does not work in sublime, but works via browser

var computerChoice = Math.floor(Math.random() * 10 + 1);
var userGuess;
var guessCount = 3;

do {
  userGuess = guessEnter();
  var i = game(guessCount, userGuess, computerChoice);
  guessCount = i;
} while (i >= 1);
console.log(computerChoice);

function game(x, y, z) {
  if (y > 10 || y < 1) {
    return x;
  } else {
    while (x >= 1) {
      if (y === z) {
        alert("You guessed " + y);
        guessCheck(x);
        gameWin(true);
        break;
      } else if (y > z) {
        alert("You guessed " + y);
        x--;
        alert("Too High! Guesses left: " + x);
        guessCheck(x);
        return (x);
      } else {
        alert("You guessed " + y);
        x--;
        alert("Too Low! Guesses left: " + x);
        guessCheck(x);
        return (x);
      }
    }
  }
}

function guessEnter() {
  return +prompt("Please enter a number between 1 and 10");
}

function guessCheck(i) {
  while (i < 1) {
    alert("Out of guesses. You lose!");
    break;
  }
}

function gameWin(i) {
  if (i === true) {
    alert("CONGRATULATIONS!!! YOU GOT THE NUMBER!!!");
  }
}