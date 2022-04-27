function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    }
}
/*
const calculator = document.getElementById("calculator");
const display = document.createElement("div");
display.setAttribute("class", "display");
calculator.appendChild(display);



function createButtons(numbers) {
    for (let i = 0; i < numbers; i++) {
        const buttons = document.createElement("button");
        buttons.value([i]);
        calculator.appendChild(buttons);
    }
}

createButtons(9);

*/