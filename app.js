'use strict';

var confirmed = confirm('Ready to get started?');
var correctAnswer = ''; // Declared bucket to place number of correct answers

var userName = prompt('Please provide your name. Don\'t worry, I\'ll wait.'); // Placeholder for the person playing.

if(confirmed === true) {
  console.log(userName + ' is ready!');
  alert('Well then, ' + userName + ', let\'s get started!');
} else {
  alert('Come on, ' + userName + '. This will be fun. I promise.');
  console.log(userName + ' says they\'re not ready...but we will start anyway!');
}

marriedOrSingle();
procreate();
theHendrixFactor();
animals();
landSeaOrAir();
numberGuess();
stateGuess();

function marriedOrSingle() {
  var firstAnswer = prompt('All questions should be answered with a Y or N. \n Tell me, ' + userName + ', Is Larry Married?');

  if (firstAnswer.toUpperCase() === 'Y') {
    correctAnswer++;
    alert('Yes, Larry is married.');
    console.log('Larry is married, correct.');
  } else {
    alert('Believe it or not, he is!');
    console.log('Sorry ladies. He\'s taken.');
  }
}

function procreate() {
  var secondAnswer = prompt('Does Larry have children?');

  if (secondAnswer.toUpperCase() === 'Y') {
    correctAnswer++;
    alert('Yes. He used to have a full head of hair, too.');
    console.log('Right! And they are awesome people.');
  } else {
    alert('Sorry, incorrect. He really does!');
    console.log('Wrong, ' + userName + '. He does have children.');
  }
}

function theHendrixFactor() {
  var thirdAnswer = prompt('Does Larry play the guitar?');

  if (thirdAnswer.toUpperCase() === 'Y') {
    correctAnswer++;
    console.log('Correct. He does play.' + correctAnswer + ' answers correct thusfar.');
  } else {
    console.log('He does to play! Do you even know him at all?');
  }
}

function animals() {
  var fourthAnswer = prompt('Does Larry have a cat?');

  if (fourthAnswer.toUpperCase() === 'Y') {
    alert('Wrong! Not really a cat person.');
    console.log('Cats? Hell to the no!');
  } else {
    correctAnswer++;
    alert('Love my dog, Shelby!');
    console.log('Dogs! All day everyday!');
  }
}

function landSeaOrAir() {
  var fifthAnswer = prompt('Was Larry in the Army?');

  if (fifthAnswer.toUpperCase() === 'Y') {
    console.log('Army? No way!');
    alert("No, Larry was in the Navy.");
  } else {
    correctAnswer++;
    console.log('Go Navy! Beat Army!')
    alert("Friends don\'t let friends join the Army");
  }
}

function numberGuess() {
  var guesses = 4;
  var guessing = true;

  while (guessing && guesses > 0) {
    var sixthAnswer = prompt('Can you guess my favorite number?');
    if (sixthAnswer < '7') {
      guesses--;
      alert('Too low! ' + guesses + ' guesses left.');
      console.log('Try again');
      console.log(guesses);
    }

    if (sixthAnswer > '7') {
      guesses--;
      alert('Too high! ' + guesses + ' guesses left.');
      console.log('Try again');
      console.log(guesses);
    }else {
      correctAnswer++;
      alert ("Wow! You got it, " + userName + "!");
      console.log('You got it!');
      guessing = false;
      console.log(guesses);
    }
  }
}

function stateGuess() {
  var guesses = 6;
  var states = ['illinois', 'indiana', 'florida', 'washington', 'Illinois', 'Indiana', 'Florida', 'Washington'];
  while (guesses >= 1) {
    var seventhAnswer = prompt('Can you guess one of the states Larry has lived in?');
    if (states.indexOf(seventhAnswer) === -1) {
      console.log(states);
      console.log(seventhAnswer);
      console.log(states.indexOf(seventhAnswer));
      alert('You guessed wrong! You have ' + guesses + ' left.');
      guesses--;
    }else {
      correctAnswer++;
      alert('Wow you\'re so smart.');
      guesses = 0;
    }
  }
}
//document.write('Larry is Married, he has children, he plays the guitar, he has a dog, and Retired from the Navy in 2015.');

if (correctAnswer == '7') {
  alert('Wow! You got all of the answers correct!');
} else if (correctAnswer <= '6' && correctAnswer >= '4') {
  alert('You got ' + correctAnswer + ' out of 7. Not bad!');
} else {
  alert('You probably should go grab a beer with Larry. Because you only got ' + correctAnswer + ' out of 7 correct.');
}
