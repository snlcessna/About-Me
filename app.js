'use strict';

var confirmed = confirm('Are you ready to rock and roll?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user is not ready...but we will start anyway!');
}
