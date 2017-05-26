'use strict';

var confirmed = confirm('Are you ready to rock and roll?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user is not ready...but we will start anyway!');
}

var firstAnswer = prompt('All questions should be answered with a Y or N. Is Larry Married?');

if (firstAnswer.toUpperCase() === 'Y') {
  alert('Yes, you are correct!');
  //console.log('Yes, you are correct!');
} else{
  alert('Sorry ladies. He\'s taken.');
  //console.log('Sorry ladies. He\'s taken.');
}

var secondAnswer = prompt('Does Larry have children?');

if (secondAnswer.toUpperCase() === 'Y') {
  console.log('Right again! They are awesome people. As you can see.');
} else {
  console.log('Wrong. Try again.')
}

var thirdAnswer = prompt('Does Larry play the guitar?');

if (thirdAnswer.toUpperCase() === 'Y') {
  console.log('Correct. He doesn\'t play well necessarily, but he does play');
} else {
  console.log('Wrong answer! Do you even know him at all?');
}

var fourthAnswer = prompt('Does Larry have a cat?');

if (fourthAnswer.toUpperCase() === 'Y') {
  console.log('Hell to the no!');
} else {
  console.log('Dogs! All day everyday!');
}

var fifthAnswer = prompt('Was Larry in the Army?');

if (fifthAnswer.toUpperCase() === 'Y') {
  console.log('Nope!');
} else {
  console.log('Go Navy! Beat Army!');
}
