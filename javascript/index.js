const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerText = "STOP";
}

function setSplitBtn() {
  btnRightElement.className = "btn split";
  btnRightElement.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.className = "btn start";
  btnLeftElement.innerText = "START";
}

function setResetBtn() {
  btnRightElement.className = "btn reset";
  btnRightElement.innerText = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className.includes("btn start")){
    setStopBtn();
    chronometer.start(printTime);
  }else{
    setStartBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className.includes("btn reset")){
    setSplitBtn();
  }else{
    setResetBtn();
  }
});
