// Select all buttons and assign event listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.textContent));
});

let displayValue = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function handleButtonClick(val) {
  switch (val) {
    case '=':
      calculate();
      break;
    case 'C':
      clearDisplay();
      break;
    case 'log':
      calculateLog();
      break;
    case 'exp':
      calculateExp();
      break;
    case 'sin':
      calculateSin();
      break;
    case 'cos':
      calculateCos();
      break;
    case 'tan':
      calculateTan();
      break;
    default:
      appendToDisplay(val);
  }
}

function appendToDisplay(val) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    if (!isFinite(result) || isNaN(result)) {
      displayValue = 'Error';
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function calculateLog() {
  try {
    const result = Math.log(eval(displayValue));
    if (!isFinite(result) || isNaN(result)) {
      displayValue = 'Error';
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function calculateExp() {
  try {
    const result = Math.exp(eval(displayValue));
    if (!isFinite(result) || isNaN(result)) {
      displayValue = 'Error';
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function calculateSin() {
  try {
    const result = Math.sin(eval(displayValue));
    if (!isFinite(result) || isNaN(result)) {
      displayValue = 'Error';
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function calculateCos() {
  try {
    const result = Math.cos(eval(displayValue));
    if (!isFinite(result) || isNaN(result)) {
      displayValue = 'Error';
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function calculateTan() {
  try {
    const result = Math.tan(eval(displayValue));
    if (!isFinite(result) || isNaN(result)) {
      displayValue = 'Error';
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

updateDisplay();
