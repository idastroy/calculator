//Operate function
const operate = (operator, a, b) => {
    if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "*") {
        return a * b;
    } else if (operator == "/") {
        return a / b;
    };
}

//Create display box

const displayBox = document.createElement("div");
displayBox.classList.add("displayBox");
document.getElementById("display").appendChild(displayBox);

//Create buttons for clear and backspace

const createAllClear = (classList, textContent) => {
    const clearButton = document.createElement("button");
    clearButton.classList = classList;
    clearButton.textContent = textContent;
    document.getElementById("longButtons").appendChild(clearButton);
}

createAllClear("clear", "AC");


const createBackspace = (classList, innerHTML) => {
    const backspace = document.createElement("button");
    backspace.classList = classList;
    backspace.innerHTML = innerHTML;
    document.getElementById("longButtons").appendChild(backspace);
}

createBackspace("backspace", `<i value="backspace" class="fa-solid fa-delete-left fa-1x"></i>`);


//Create buttons for numbers

const createButton = (classList, textContent) => {
    const numbers = document.createElement("button");
    document.getElementById("numbers").appendChild(numbers);
    numbers.classList = classList;
    numbers.textContent = textContent;
}

for (let i = 0; i < 10; i++) {
    createButton("number", `${value=[i]}`);
}


//Create buttons for decimal and equals

createButton("decimal", `${value="."}`);
createButton("equals", `${value="="}`);

//Create buttons for operators

const operators = ["/", "x", "-", "+"];
const createOperatorButton = (classList, textContent) => {
    const symbol = document.createElement("button");
    document.getElementById("operators").appendChild(symbol);
    symbol.textContent = textContent;
    symbol.classList = classList;
}

for (let j = 0; j < operators.length; j++) {
    createOperatorButton(`operator${[j]}`, `${operators[j]}` )
}

//Functions to populate the display when you click a button
const buttonValue = document.querySelectorAll("button");
let currentNumber = 0;
let previousNumber = 0; // /[+-]?[0-9]+\.?[0-9]* Can be any number with an optional decimal. Source: https://regexland.com/regex-decimal-numbers/#:~:text=A%20regular%20expression%20for%20a,optional%20plus%20or%20minus%20sign.
let operator = [];

function populateDisplay() {
    [...buttonValue].map(value => {
        value.addEventListener("click", () => {
            displayBox.textContent += value.textContent;
            if (operators.includes(value.textContent)) {
                previousNumber = displayBox.textContent;
                displayBox.textContent = "";
                console.log(previousNumber);
        //         displayBox.textContent = "";
        //         operator = value.textContent;
        //         console.log(previousNumber);
        //         console.log(operator);
        //     }
        //     if (value.textContent == "AC") {
        //         displayBox.textContent = "";
        //         }
        //     if (value.textContent == "=") {
        //         equate();
        //     }
        // })
            }
        })
    })
}

function equate() {
    displayBox.textContent = operate(operator, previousNumber, currentNumber);
}

populateDisplay();

// const numberButton = document.getElementsByClassName("number");
// const decimalButton = document.getElementsByClassName("decimal");
// const equalsButton = document.getElementsByClassName("equals");
// const operatorButton = document.querySelectorAll(".operator");
// const allClearButton = document.getElementsByClassName("clear");
// const backspaceButton = document.getElementsByClassName("backspace");

