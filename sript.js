let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch(error) {
    display.value = 'Error';
  }
}

function squareRoot() {
  try {
    let result = Math.sqrt(eval(display.value));
    display.value = result;
  } catch(error) {
    display.value = 'Error';
  }
}

function percentage() {
  try {
    let result = eval(display.value) / 100;
    display.value = result;
  } catch(error) {
    display.value = 'Error';
  }
}

function addToMemory() {
  try {
    memory += parseFloat(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}

function subtractFromMemory() {
  try {
    memory -= parseFloat(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}

function recallMemory() {
  display.value = memory;
}

function clearMemory() {
  memory = 0;
}