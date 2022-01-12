


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/pizzahawaii.jfif') {
      myImage.setAttribute ('src','bilder/pizzahawaii.jfif');
    } else {
      myImage.setAttribute ('src','bilder/pizzahawaii.jfif');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Pizza alla ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pizza alla ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
