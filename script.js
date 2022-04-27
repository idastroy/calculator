//Operator functions

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

//Create display box

const displayBox = document.createElement("div");
displayBox.classList.add("displayBox");
displayBox.textContent = "Display";
document.getElementById("display").appendChild(displayBox);

//Create clear and backspace button

const clearButton = document.createElement("button");
clearButton.classList.add("clear");
clearButton.textContent = "AC";
document.getElementById("longButtons").appendChild(clearButton);

const backspace = document.createElement("button");
backspace.classList.add("backspace");
backspace.innerHTML = `<i class="fa-solid fa-delete-left fa-1x"></i>`;
document.getElementById("longButtons").appendChild(backspace);


//Create buttons for numbers, equals, and decimal

function createNumberButtons() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers = document.createElement("button");
        numbers.classList.add("number");
        //numbers.innerHTML = numbers[i];
        document.getElementById("numbers").appendChild(numbers);
    }
    const decimal = document.createElement("button");
    const equals = document.createElement("button");
    decimal.classList.add("decimal");
    equals.classList.add("equals");
    document.getElementById("numbers").appendChild(decimal);
    document.getElementById("numbers").appendChild(equals);
}

createNumberButtons();

//Create buttons for operators

function createOperatorButtons() {
    let operators = [];
    for (let i = 0; i < 4; i++) {
        operators = document.createElement("button");
        operators.classList.add("operator");
        //operators.innerHTML = operator[i];
        document.getElementById("operators").appendChild(operators);
    }
}

createOperatorButtons();