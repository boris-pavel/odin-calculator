let input = '';
let preInput = '';
let operatorInput = '';
let maxDigits = 20;
let digitCount = 0;
let isDecmial = false;

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equals');

function add(b, a) {
    return (+a) + (+b);
}

function multiply(b, a) {
    return (+a) * (+b);
}

function subtract(b, a) {
    return (+a) - (+b);
}

function divide(b, a) {
    return ((+a) / (+b)).toFixed(2);
}

function calculate() {
    switch (operatorInput) {
        case '+':
            input = add(input, preInput)
            display.textContent = input;
            preInput = '';
            break;
        case '-':
            input = subtract(input, preInput)
            display.textContent = input;
            preInput = '';
            break;
        case '*':
            input = multiply(input, preInput)
            display.textContent = input;
            preInput = '';
            break;
        case '/':
            input = divide(input, preInput)
            display.textContent = input;
            preInput = '';
            break;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (digitCount < maxDigits) {
            input += number.textContent;
            digitCount++;
        }
        display.textContent = input;
    })
});

clear.addEventListener('click', () => {
    input = '';
    display.textContent = input;
    digitCount = 0;
    isDecmial = false;
});

deleteBtn.addEventListener('click', () => {
    if (input[input.length - 1] === '.')
        isDecmial = false;
    input = input.toString().slice(0, input.toString().length - 1);
    display.textContent = input;
    operatorInput = '';
    if (digitCount > 0)
        digitCount--;

});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.textContent = operator.textContent;
        operatorInput = display.textContent;
        if (input) {
            preInput = input;
            input = '';
        }
    });
});

decimal.addEventListener('click', () => {
    if (!isDecmial) {
        input += '.';
        display.textContent = input;
        isDecmial = true;
    }
});

equal.addEventListener('click', () => {
    calculate();
})

