let currentNumber = ""; 
let previousNumber = ""; 
let operator = "";
const operators = ["/", "x", "-", "+"];
let equals = false;
let isOperator = false;

//Create display box

const displayBox = document.getElementById("display").appendChild(document.createElement("div"));
displayBox.classList.add("displayBox");
displayBox.textContent = "";


//Create buttons for clear and backspace

const createAllClear = (classList, textContent) => {
    const clearButton = document.createElement("button");
    clearButton.classList = classList;
    clearButton.textContent = textContent;
    document.getElementById("longButtons").appendChild(clearButton);
}

const createBackspace = (classList, innerHTML) => {
    const backspace = document.createElement("button");
    backspace.classList = classList;
    backspace.innerHTML = innerHTML;
    document.getElementById("longButtons").appendChild(backspace);
}


createAllClear("clear", "AC");
createBackspace("backspace", `<i value="backspace" class="fa-solid fa-delete-left fa-1x"></i>`);


//Create buttons for numbers, decimal, and equals

const createButton = (classList, textContent) => {
    const numbers = document.createElement("button");
    document.getElementById("numbers").appendChild(numbers);
    numbers.classList = classList;
    numbers.textContent = textContent;
}


for (let i = 0; i < 10; i++) {
    createButton("number", `${value=[i]}`);
}
createButton("decimal", `${value="."}`);
createButton("equals", `${value="="}`);


//Create buttons for operators

const createOperatorButton = (classList, textContent) => {
    const symbol = document.createElement("button");
    document.getElementById("operators").appendChild(symbol);
    symbol.textContent = textContent;
    symbol.classList = classList;
}


for (let j = 0; j < operators.length; j++) {
    createOperatorButton(`operator${[j]}`, `${operators[j]}` )
}


//Operate function

const operate = (operator, a, b) => {
    if (operator == "+") {
        displayBox.textContent = a + b;
    } else if (operator == "-") {
        displayBox.textContent = a - b;
    } else if (operator == "x") {
        displayBox.textContent = a * b;
    } else if (operator == "/") {
        displayBox.textContent = a / b;
    };
    if (operator == "/" && b == "0") {
        displayBox.textContent = "80085!";
    }
    displayBox.textContent = displayBox.textContent.substring(0, 9);
}


//Functions to populate the display

function clearDisplay() {
    displayBox.textContent = "";
    decimalButton.disabled = false;
    equals = false;
    isOperator = false;
}

function populateDisplay(num) {
    displayBox.textContent += num;
    displayBox.textContent = displayBox.textContent.substring(0, 9);
}

function runEquation() {
    currentNumber += displayBox.textContent;
    operate(operator, parseFloat(previousNumber), parseFloat(currentNumber));
    equals = true;
    backspaceButton.disabled = true;
}


//Event functions

function numberEvent(e) {
    if (equals) {
        clearDisplay();
    }
    if (isOperator) {
        clearDisplay();
    }
    populateDisplay(e.textContent);
    backspaceButton.disabled = false;
}

function decimalEvent() {
    if (equals) {
        clearDisplay();
    }
    if (isOperator) {
        clearDisplay();
    }
    populateDisplay(".");
    decimalButton.disabled = true;
    backspaceButton.disabled = false;
}

function operatorEvent(e) {
    if (previousNumber !== "" && currentNumber == "") {
        runEquation();
        operator = e.textContent;
        previousNumber = displayBox.textContent;
        currentNumber = "";
        decimalButton.disabled = false;
        console.log(previousNumber + operator + currentNumber)
    } else {
        previousNumber = displayBox.textContent;
        currentNumber = "";
        operator = e.textContent;
        isOperator = true;
        backspaceButton.disabled = false;
    }
}

function equalsEvent() {
    runEquation();
    previousNumber = currentNumber;
    currentNumber = displayBox.textContent;
}

function allClearEvent() {
    clearDisplay();
    currentNumber = "";
    previousNumber = "";
    operator = "";
}

function backspaceEvent() {
    let eraseDisplay = [...displayBox.textContent];
    eraseDisplay.pop();
    displayBox.textContent = eraseDisplay.join("");
}


//Click events

const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll("[class*='operator']");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const allClearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");


[...numberButton].map(value => {
    value.addEventListener("click", () => numberEvent(value));
});
[...operatorButton].map(value => {
    value.addEventListener("click", () => operatorEvent(value));
});
decimalButton.addEventListener("click", () => decimalEvent());
equalsButton.addEventListener("click", () => equalsEvent());
allClearButton.addEventListener("click", () => allClearEvent());
backspaceButton.addEventListener("click", () => backspaceEvent());


//Keyboard events

window.addEventListener("keydown", (btn) => {
    // if (btn.key <= 0 || btn.key >= 0) {
    //     numberEvent(btn);
    //     console.log(btn)
    // }
    // if (btn.key == ".") {
    //     decimalEvent();
    // }
    // if (btn.key == "/" || btn.key == "*" || btn.key == "+" || btn.key == "-") {
    //     operatorEvent();
    // }
    // if (btn.key == "Backspace") {
    //     backspaceEvent();
    // }
    // if (btn.key == "=") {
    //     equalsEvent();
    // }
    console.log(btn);
    numberEvent(btn);
    btn.classList = ".press";
});

/*
To do:
Hard:
CHECK- be able to start from the beginning if a number or decimal is pressed after equals
CHECK - be able to continue the current equation if an operator is pressed after equals
CHECK- make displaybox say something funny if user divides a number by 0 to avoid crashing computer
CHECK- disable backspace on the displaybox once the operate function runs
CHECK- only allow displaybox to be 9 characters long
CHECK- round numbers with long decimals
CHECK- make sure user is really starting fresh after pressing all clear
CHECK- "Pressing = before entering all of the numbers or an operator could cause problems!"
CHECK- operate on the current and previous numbers if an operator is clicked instead of equals (ex: 4 + 5 * should dispay 9)
- allow operator to change value on consecutive clicks (ex: if user presses 3 + - * - + * 6, display should operate of the last operator clicked and show 18)
- add keypress events
- if backspace erases a decimal, decimal.disable = false
- fix box shadow on buttons 
- get .press in CSS to work correctly
- make sure decimal is not disabled after equals or operators
Easy:
- clean up code. Make sure functions are used where needed and that they only perform one function. Delete unnecesary comments and console.logs. Make sure CSS code is clean
- write detailed description in Readme before pushing to github
*/