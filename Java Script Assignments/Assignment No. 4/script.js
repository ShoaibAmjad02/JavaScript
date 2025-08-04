let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let isCalculatorOn = false;

function evaluateExpression(expr) {
    try {
        return eval(expr);
    } catch {
        return "Error";
    }
}

function toggleCalculator() {
    isCalculatorOn = !isCalculatorOn;
    input.disabled = !isCalculatorOn;
    document.getElementById('toggle').textContent = isCalculatorOn ? '':'';
    
    // Toggle background color and glow effect based on calculator state
    buttons.forEach(button => {
        if (isCalculatorOn) {
            button.classList.add('glow');
            if (button.classList.contains('operator')) {
                button.classList.add('operator');
            } else if (button.classList.contains('equalBtn')) {
                button.classList.add('equalBtn');
            } else if (button.classList.contains('clear')) {
                button.classList.add('clear');
            } else if (button.classList.contains('number')) {
                button.classList.add('number');
            }
            button.classList.add('active');
        } else {
            button.classList.remove('glow', 'operator', 'equalBtn', 'clear', 'number', 'active');
        }
        string = "";
    });
}
document.getElementById('toggle').addEventListener('click', toggleCalculator);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!isCalculatorOn) return;

        let btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            input.value = evaluateExpression(string);
            string = input.value;
        } else if (btnValue === 'AC') {
            string = "";
            input.value = string;
        } else if (btnValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += btnValue;
            input.value = string;
        }
    });
});
