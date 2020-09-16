// define myImage as image on the website
let myImage = document.querySelector('img');

//change an image on a click
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}

//buttons definition
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//changes the header if the username is entered
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

//sets function above to a button
myButton.onclick = function() {
  setUserName();
}
