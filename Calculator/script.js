document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.calc-btn');

    let expression = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
    
            if (buttonText === 'C') {
                expression = '';
                result = '';
                screen.textContent = '0'; // Set screen content to '0'
            } else if (buttonText === '=') {
                try {
                    result = evaluateExpression(expression);
                } catch (error) {
                    result = 'Error';
                }
                expression = '';
            } else if (buttonText === '←') {
                expression = expression.slice(0, -1);
            } else {
                if (screen.textContent === '0') {
                    screen.textContent = ''; // Clear '0' if it's the initial value
                }
                expression += buttonText;
            }
    
            screen.textContent = result !== '' ? result : expression || '0'; // Check if result is not empty, else show expression or '0'
        });
    });
    
    


    function evaluateExpression(expression) {
        const operators = ['+', '-', '*', '/'];
        const stack = [];
        let currentNumber = '';
    
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
    
            if (!isNaN(parseInt(char)) || char === '.') {
                currentNumber += char;
            } else if (operators.includes(char)) {
                stack.push(parseFloat(currentNumber));
                stack.push(char);
                currentNumber = '';
            }
        }
        stack.push(parseFloat(currentNumber));
    
        let total = stack.shift();
        while (stack.length) {
            const operator = stack.shift();
            const nextNumber = stack.shift();
    
            if (operator === '+') total += nextNumber;
            else if (operator === '-') total -= nextNumber;
            else if (operator === '*') total *= nextNumber;
            else if (operator === '/') {
                if (nextNumber === 0) throw new Error('Divisao por 0');
                total /= nextNumber;
            }
        }
        return total;
    }
    
});

