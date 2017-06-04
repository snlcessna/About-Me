'use strict';

var confirmed = confirm('Ready to get started?');
var correctAnswer = ''; // Declared bucket to place number of correct answers

var userName = prompt('Please provide your name. Don\'t worry, I\'ll wait.'); // Placeholder for the person playing.

if(confirmed === true){
  console.log(userName + ' is ready!');
} else {
  console.log(userName + ' says they\'re not ready...but we will start anyway!');
}

var firstAnswer = prompt('All questions should be answered with a Y or N. \n Is Larry Married?');

if (firstAnswer.toUpperCase() === 'Y') {
  correctAnswer++;
  console.log('Larry is married, correct.');
} else {
  console.log('Sorry ladies. He\'s taken.');
}

var secondAnswer = prompt('Does Larry have children?');

if (secondAnswer.toUpperCase() === 'Y') {
  correctAnswer++;
  console.log('Right! And they are awesome people.');
} else {
  console.log('Wrong. Try again.');
}

var thirdAnswer = prompt('Does Larry play the guitar?');

if (thirdAnswer.toUpperCase() === 'Y') {
  correctAnswer++;
  console.log('Correct. He doesn\'t play well necessarily, but he does play');
} else {
  console.log('Wrong answer! Do you even know him at all?');
}

var fourthAnswer = prompt('Does Larry have a cat?');

if (fourthAnswer.toUpperCase() === 'Y') {
  console.log('Hell to the no!');
} else {
  correctAnswer++;
  console.log('Dogs! All day everyday!');
}

var fifthAnswer = prompt('Was Larry in the Army?');

if (fifthAnswer.toUpperCase() === 'Y') {
  console.log('Nope!');
} else {
  correctAnswer++;
  console.log('Go Navy! Beat Army!');
}

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
    console.log('You got it!');
    guessing = false;
    console.log(guesses);
  }
}
var guesses = 6;
var states = ['illinois', 'indiana', 'florida', 'washington', 'Illinois', 'Indiana', 'Florida', 'Washington'];
while (guesses >= 1) {
  var seventhAnswer = prompt('Can you guess one of the states Larry has lived in?');
  if (states.indexOf(seventhAnswer) === -1) {
    console.log(states);
    console.log(seventhAnswer);
    console.log(states.indexOf(seventhAnswer));
    alert('You guessed wrong! You have ' + guesses + ' left.');
  }else {
    alert('Wow you\'re so smart.');
    guesses = 0;
  }
}

//document.write('Larry is Married, he has children, he plays the guitar, he has a dog, and Retired from the Navy in 2015.');
/*
if (correctAnswer === "7") {
  alert('Wow! You got all of the answers correct!')
} elseif (correctAnswer === "6" || correctAnswer === "5" ||correctAnswer === "4" ) {
  alert ('You got ' + correctAnswer + ' out of 7. Not bad!')
} else {
alert('You probably should go grab a beer with Larry. Because you only got ' + correctAnswer + ' out of 6 correct.');
}*/
