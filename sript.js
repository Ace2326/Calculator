const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value);
        if (!Number.isFinite(result)) {
            throw new Error('Invalid input');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 2000);
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    display.value = '';
}

function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}

function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function addToMemory() {
    display.memory = parseFloat(display.value);
}

function recallMemory() {
    if (display.memory) {
        display.value = display.memory;
    }
}
