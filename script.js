//Create display box

const displayBox = document.getElementById("display").appendChild(document.createElement("div"));
displayBox.classList.add("displayBox");


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
    console.log(a + operator + b);
}


//Declare variables and functions to populate the display

let currentNumber = 0; 
let previousNumber = 0; 
let operator = "";
let equals = false;


function clearDisplay() {
    displayBox.textContent = "";
    decimalButton.disabled = false;
    equals = false;
}

function eraseLastInput() {
    let eraseDisplay = [...displayBox.textContent];
    eraseDisplay.pop();
    displayBox.textContent = eraseDisplay.join("");
}

function populateDisplay(num) {
    displayBox.textContent += num;
}


//Add events for each button

//Number click event
const numberButton = document.querySelectorAll(".number");
[...numberButton].map(value => {
    value.addEventListener("click", () => {
        if (equals) {
            clearDisplay();
        }
        populateDisplay(value.textContent);
        backspaceButton.disabled = false;
        });
    });


//Decimal click event
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    if (equals) {
        clearDisplay();
    }
    populateDisplay(".");
    decimalButton.disabled = true;
    backspaceButton.disabled = false;
});

//Operator click event
const operatorButton = document.querySelectorAll("[class*='operator']");
[...operatorButton].map(value => {
    value.addEventListener("click", () => {
        previousNumber = displayBox.textContent;
        operator += value.textContent;
        clearDisplay();
        backspaceButton.disabled = false;
        });
    });

//Equals click event
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    currentNumber = displayBox.textContent;
    let lastOperator = operator.charAt(operator.length-1);
    operate(lastOperator, parseFloat(previousNumber), parseFloat(currentNumber));
    equals = true;
    backspaceButton.disabled = true;
});

//All clear click event
const allClearButton = document.querySelector(".clear");
allClearButton.addEventListener("click", () => {
    clearDisplay();
    currentNumber = "";
    previousNumber = "";
    operator = "";
});

//Backspace click event
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => eraseLastInput());

/*
To do:
Hard:
CHECK- be able to start from the beginning if a number or decimal is pressed after equals
CHECK - be able to continue the current equation if an operator is pressed after equals
CHECK- make displaybox say something funny if user divides a number by 0 to avoid crashing computer
CHECK- disable backspace on the displaybox once the operate function runs
- only allow displaybox to be 9 characters long
- operate on the current and previous numbers if an operator is clicked instead of equals (ex: 4 + 5 * should dispay 9)
- allow operator to change value on consecutive clicks (ex: if user presses 3 + - * - + * 6, display should operate of the last operator clicked and show 18)
- round numbers with long decimals
- What does this mean? : "Pressing = before entering all of the numbers or an operator could cause problems!"
- make sure user is really starting fresh after pressing all clear
- add keypress events
Easy:
- clean up code. Make sure functions are used where needed and only perform one function. Delete unnecesary comments and console.logs. Make sure CSS code is clean
- write description in Readme before pushing to github
*/