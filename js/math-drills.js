//returns random integer from 0 to 10
let start = false;
let historyStart = false;
const child = document.getElementById('child');
const history = document.getElementById('history');

function randomNumber(){
if (start) {
history.insertBefore(child.childNodes[0] , history.childNodes[0]);
}
if (history.childNodes.length > 10) {
  history.removeChild(history.childNodes[10]);
}
let intOne = Math.floor(Math.random()*11); //change range later based on settings
let intTwo = Math.floor(Math.random()*11); //change range later based on settings

let message = `${intOne} x ${intTwo} =`;
const para = document.createElement('p');
para.textContent = message;
child.appendChild(para);
start = true;
 return result = intOne * intTwo;
}
randomNumber();

function check(){
  const userInput = document.getElementById('userInput').value;
  if (result === parseInt(userInput)) {
    console.log("correct");
    child.childNodes[0].innerHTML += " "+result;
    randomNumber();
  }
  else {
    console.log("false");
  }
  document.getElementById('userInput').value = '';
}


const button = document.getElementById('answer');
button.addEventListener('click', check);
