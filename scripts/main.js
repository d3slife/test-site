var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/fox.png') {
    myImage.setAttribute('src', 'images/fox_2.png');
  } else {
    myImage.setAttribute('src', 'images/fox.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello my new friend, ' + myName + "!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello my new friend, ' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}
