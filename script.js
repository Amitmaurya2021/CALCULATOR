// script.js
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                screen.textContent = '';
                return;
            }

            if (value === '=') {
                if (previousInput && currentInput && operator) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    screen.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput && operator) {
                        previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    } else {
                        previousInput = currentInput;
                    }
                    operator = value;
                    currentInput = '';
                }
                return;
            }

            currentInput += value;
            screen.textContent = currentInput;
        });
    });
});
