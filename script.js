
let currentInput = '';
let currentOperator = '';
let currentResult = 0;

function appendValue(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

function setOperator(operator) {
  currentOperator = operator;
  currentResult = parseFloat(currentInput);
  currentInput = '';
}

function calculateResult() {
  const inputValue = parseFloat(currentInput);
  switch (currentOperator) {
    case '+':
      currentResult += inputValue;
      break;
    case '-':
      currentResult -= inputValue;
      break;
    case '*':
      currentResult *= inputValue;
      break;
    case '/':
      if (inputValue !== 0) {
        currentResult /= inputValue;
      } else {
        alert('Cannot divide by zero');
        clearResult();
        return;
      }
      break;
  }
  document.getElementById('result').value = currentResult;
  currentInput = '';
  currentOperator = '';
}

function clearResult() {
  currentInput = '';
  currentOperator = '';
  currentResult = 0;
  document.getElementById('result').value = '';
}
