'use strict';

var confirmed = confirm('Are you ready to rock and roll?');
var correctAnswer = 5;

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user is not ready...but we will start anyway!');
}

var firstAnswer = prompt('All questions should be answered with a Y or N. \n Is Larry Married?');

if (firstAnswer.toUpperCase() === 'Y') {
  console.log('Yes, you are correct!');
} else {
  correctAnswer = correctAnswer - 1;
  console.log('Sorry ladies. He\'s taken.');
}

var secondAnswer = prompt('Does Larry have children?');

if (secondAnswer.toUpperCase() === 'Y') {
  console.log('Right! They are awesome people.');
} else {
  correctAnswer = correctAnswer - 1;
  console.log('Wrong. Try again.');
}

var thirdAnswer = prompt('Does Larry play the guitar?');

if (thirdAnswer.toUpperCase() === 'Y') {
  console.log('Correct. He doesn\'t play well necessarily, but he does play');
} else {
  correctAnswer = correctAnswer - 1;
  console.log('Wrong answer! Do you even know him at all?');
} 

var fourthAnswer = prompt('Does Larry have a cat?');

if (fourthAnswer.toUpperCase() === 'Y') {
  correctAnswer = correctAnswer - 1;
  console.log('Hell to the no!');
} else {
  console.log('Dogs! All day everyday!');
}

var fifthAnswer = prompt('Was Larry in the Army?');

if (fifthAnswer.toUpperCase() === 'Y') {
  correctAnswer = correctAnswer - 1;
  console.log('Nope!');
} else {
  console.log('Go Navy! Beat Army!');
}
document.write('Larry is Married, he has children, he plays the guitar, he has a dog, and Retired from the Navy in 2015.');

alert('You got ' + correctAnswer + ' out of 5 correct!');
