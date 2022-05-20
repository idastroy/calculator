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

const createLongButton = (classList, textContent) => {
    const longButton = document.getElementById("longButtons").appendChild(document.createElement("button"));
    longButton.classList = classList;
    longButton.textContent = textContent;
}


createLongButton("clear", "AC");
createLongButton("backspace", "C");


//Create buttons for numbers, decimal, and equals

const createButton = (classList, textContent) => {
    const numbers = document.getElementById("numbers").appendChild(document.createElement("button"));
    numbers.classList = classList;
    numbers.textContent = textContent;
}


for (let i = 9; i > 0; i--) {
    createButton("number", `${value=[i]}`);
}
createButton("equals", `${value="="}`);
createButton("decimal", `${value="."}`);
createButton("number", `${value="0"}`);


//Create buttons for operators

const createOperatorButton = (classList, textContent, name) => {
    const symbol = document.getElementById("operators").appendChild(document.createElement("button"));
    symbol.classList = classList;
    symbol.textContent = textContent;
    symbol.name = name;
}


for (let j = 0; j < operators.length; j++) {
    createOperatorButton(`operator${[j]}`, `${operators[j]}`, `${operators[j]}`)
}


//Operate function

const operate = (operator, a, b) => {
    if (operator == "+") displayBox.textContent = a + b;
    else if (operator == "-") displayBox.textContent = a - b;
    else if (operator == "x") displayBox.textContent = a * b;
    else {
        displayBox.textContent = a / b;
        if (b == "0") displayBox.textContent = "80085!";
    };
    displayBox.textContent = displayBox.textContent.substring(0, 9);
    //console.log(previousNumber + " " + operator + " " + currentNumber);
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
    //console.log(previousNumber + " " + operator + " " + currentNumber);
}

function runEquation() {
    currentNumber += displayBox.textContent;
    operate(operator, parseFloat(previousNumber), parseFloat(currentNumber));
    equals = true;
    backspaceButton.disabled = true;
    decimalButton.disabled = false;
    //console.log(previousNumber + " " + operator + " " + currentNumber);
}


//Event functions

function numberEvent(e) {
    if (equals) clearDisplay();
    if (isOperator) clearDisplay();
    populateDisplay(e.textContent);
    backspaceButton.disabled = false;
    // console.log(previousNumber + " " + operator + " " + currentNumber);
}

function decimalEvent() {
    if (equals) clearDisplay();
    if (isOperator) clearDisplay();
    populateDisplay(".");
    decimalButton.disabled = true;
    backspaceButton.disabled = false;
}

function operatorEvent(e) {
    if (previousNumber !== "" && currentNumber == "") {
        runEquation();
        operator = e.name;
        previousNumber = displayBox.textContent;
        currentNumber = "";
        decimalButton.disabled = false;
        // console.log(previousNumber + " " + operator + " " + currentNumber);
        } 
    else {
        previousNumber = displayBox.textContent;
        currentNumber = "";
        operator = e.name;
        isOperator = true;
        backspaceButton.disabled = false;
        // console.log(previousNumber + " " + operator + " " + currentNumber);
    }
}

function equalsEvent() {
    runEquation();
    previousNumber = currentNumber;
    currentNumber = displayBox.textContent;
    //console.log(previousNumber + " " + operator + " " + currentNumber);
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
    if (!eraseDisplay.includes(".")) {
        decimalButton.disabled = false;
    }
}

// function keyboardEvent(e) {
//     if (e.key <= 0 || e.key >= 0) numberEvent(e.key);
//     if (e.key == ".") decimalEvent();
//     if (e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-") operatorEvent(e.key);
//     if (e.key == "Backspace") backspaceEvent();
//     if (e.key == "=") equalsEvent();
//     e.classList = "press";
//     console.log(e);
//     console.log(e.key);
//     console.log(window);
//     console.log(document);
//     console.log(numberEvent)
//}


//Events

const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll("[class*='operator']");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const allClearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const button = document.querySelectorAll("button");


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
//window.addEventListener("keydown", keyboardEvent);


//Add icons

function addIcons() {
    [...button].map(value => {
        if (value.classList == "backspace") {
            value.innerHTML = `<i value="backspace" class="fa-solid fa-delete-left fa-1x"></i>`
        }
        if (value.classList == "decimal") {
            value.innerHTML = `<i class="fa-solid fa-circle fa-2xs"></i>`;
            value.style.fontSize = "8px";
            value.style.padding = "30px 37px 30px 32px"
        }
        if (value.classList == "equals") {
            value.innerHTML = `<i class="fa-solid fa-equals fa-1x"></i>`;
        }
        if (value.classList == "operator0") {
            value.innerHTML = `<i class="fa-solid fa-divide fa-1x"></i>`;
        }
        if (value.classList == "operator1") {
            value.innerHTML = `<i class="fa-solid fa-xmark fa-1x"></i>`;
        }
        if (value.classList == "operator2") {
            value.innerHTML = `<i class="fa-solid fa-minus fa-1x"></i>`;
        }
        if (value.classList == "operator3") {
            value.innerHTML = `<i class="fa-solid fa-plus fa-1x"></i>`;
        }
    });
}

addIcons();

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
CHECK- if backspace erases a decimal, decimal.disable = false 
CHECK- make sure decimal is not disabled after equals or operators
CHECK- import divide icon from font awesome
- add a math round function to limit decimals
- allow operator to change value on consecutive clicks (ex: if user presses 3 + - * - + * 6, display should operate on the last operator clicked and show 18)
- add keypress events
- get .press in CSS to work correctly
- make calculator mobile friendly

Easy:
- clean up code. Make sure functions are used where needed and that they only perform one function. Delete unnecesary comments and console.logs. Make sure CSS code is clean
- write detailed description in Readme before pushing to github
*/