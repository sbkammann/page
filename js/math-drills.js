//create an algorithm that reduces chance of duplicates and improces on the random numbers
//create heat map for problem pairing


let start = false;
let historyStart = false;
const child = document.getElementById('child');
const history = document.getElementById('history');
const progressBar = document.getElementById('progressBar');
//get check box values
const excludeZero = document.getElementById('excludeZero');
const excludeOne = document.getElementById('excludeOne');
excludeOne

function randomNumber(){
let num = 11;
let add = 0;
if (start) {
history.insertBefore(child.childNodes[0] , history.childNodes[0]);
}
if (history.childNodes.length > 10) {
  history.removeChild(history.childNodes[10]);
}
if (excludeZero.checked) { // can you have 0 but not 1?
  add = 1;
  num=10;
}
if (excludeOne.checked) {
  add = 2;
  num = 10;
}
else {
  add = 0;
  num = 11;
}
let intOne;
if (document.getElementById('focusedMode').checked){
  intOne = document.getElementById('focusNumber').value;
}
else {
  intOne = Math.floor(Math.random()*num) + add;
}

let intTwo = Math.floor(Math.random()*num) + add;
let progressBar = document.getElementById('focusNumber').value;

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
    if (document.getElementById('limited').checked){
      const progress = document.createElement('div');
      progress.style.color = "green"; //.setAttribute('color', 'green'); need to set width etc. 
      progressBar.appendChild(progress);
    }
    randomNumber();
  }
  else {
    console.log("false");
  }
  document.getElementById('userInput').value = '';
}


const button = document.getElementById('answer');
button.addEventListener('click', check);
