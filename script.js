function calculator(num1, num2, operator) {
    let result;
    
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
    
    return result;
  }
  
// get all numeric buttons
const numericButtons = document.querySelectorAll('.btn:not(#add-button):not(#subtract-button):not(#multiply-button):not(#divide-button):not(#clear-button):not(#equals-button)');

// add event listener to each numeric button
numericButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue + button.textContent;
  });
});

