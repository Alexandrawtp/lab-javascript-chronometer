const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = null;
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText == "START") {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText == "SPLIT") {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
    printTime();
  }
});