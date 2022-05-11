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
}


//Variables and functions to populate the display

let currentNumber = 0; // /[+-]?[0-9]+\.?[0-9]*/
let previousNumber = 0; // /[+-]?[0-9]+\.?[0-9]*/  //Can be any number with an optional decimal. Source: https://regexland.com/regex-decimal-numbers/#:~:text=A%20regular%20expression%20for%20a,optional%20plus%20or%20minus%20sign.
let operator = [];
let equals = false;

function clearDisplay() {
    displayBox.textContent = "";
    decimalButton.disabled = false;
}

function eraseLastInput() {
    let eraseDisplay = [...displayBox.textContent];
    eraseDisplay.pop();
    displayBox.textContent = eraseDisplay.join("");
}


//Add events for each button

//Number click event
const numberButton = document.querySelectorAll(".number");
[...numberButton].map(value => {
    value.addEventListener("click", () => {
        displayBox.textContent += value.textContent;
        currentNumber = displayBox.textContent;
        //console.log(previousNumber + operator + currentNumber);
        if (equals) {
            // let nextEquation = [...displayBox.textContent];
            // nextEquation.pop();
            // displayBox.textContent = nextEquation;
            // equals = false;
            // currentNumber = [...currentNumber].pop();
            // console.log(currentNumber + " " + previousNumber);
            //currentNumber = displayBox.textContent;
        };
        });
    });

    //2 + 5 = 7
    //3 + 2 = 5
    //20 + 2 = 22


//Decimal click event
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    displayBox.textContent += ".";
    decimalButton.disabled = true;
});

//Operator click event
const operatorButton = document.querySelectorAll("[class*='operator']");
[...operatorButton].map(value => {
    value.addEventListener("click", () => {
        operator = value.textContent;
        previousNumber = displayBox.textContent.split(operator)[0];
        clearDisplay();
        });
    });

//Equals click event
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    operate(operator, parseFloat(previousNumber), parseFloat(currentNumber));
    //console.log(previousNumber + operator + currentNumber);
    previousNumber = currentNumber;
    currentNumber = displayBox.textContent;
    equals = true;
});

//All clear click event
const allClearButton = document.querySelector(".clear");
allClearButton.addEventListener("click", () => clearDisplay());

//Backspace click event
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => eraseLastInput());

/*
To do:

- be able to start from the beginning if a number or decimal is pressed after equals
- be able to continue the current equation if an operator is pressed after equals
- only allow displaybox to be 9 characters
- add keypress events
- make displaybox say "80085" if user divides a number by 0
- disable backspace on the displaybox once the operate function runs
- operate on a current and previous numbers if an operator is clicked instead of equals (ex: 4 + 5 * should dispay 9)
- allow operator to change value on consecutive clicks (ex: if user presses 3 + - * - + * 6, display should operate of the last operator clicked and show 18)
- round numbers with long decimals
- What does this mean? : "Pressing = before entering all of the numbers or an operator could cause problems!"
- make sure user is really starting fresh after pressing all clear
- clean up code. Make sure functions are used where needed and only perform one function. Delete unnecesary comments and console.logs. Make sure CSS code is clean
- write description in Readme before pushing to github
*/





// OLD
//const buttonValue = document.querySelectorAll("button");

// function populateDisplay() {
//     [...buttonValue].map(value => {
//         value.addEventListener("click", () => {
//             displayBox.textContent += value.textContent;
//             currentNumber = displayBox.textContent;
//             if (operators.includes(value.textContent)) {
//                 operator = value.textContent;
//                 previousNumber = displayBox.textContent.split(operator)[0];
//                 clearDisplay();
//                 //console.log(previousNumber + " " + operator);
//             }
//             if (value.textContent == "AC") {
//                 clearDisplay();
//                 previousNumber = 0;
//                 currentNumber = 0;
//             }
//             if (value.classList == "backspace") {
//                 eraseLastInput();
//             }
//             if (value.textContent == "=") {
//                 //console.log(previousNumber + " " + operator + " " + currentNumber);
//                 operate(operator, parseFloat(previousNumber), parseFloat(currentNumber));
//                 // decimalButton.disabled = true;
//                 // backspaceButton.disabled = true;
//                 // equalsButton.disabled = true;
//                 currentNumber = displayBox.textContent;
//                 console.log(currentNumber);
//                 console.log(previousNumber);
                
//             }
//             // if (currentNumber.includes("=")) {
//             //     currentNumber = displayBox.textContent.split(".equals")[0];
//             //     console.log(currentNumber);
//             // }
//         })
//     })
// }

// populateDisplay();

// function startNextEquation() {
//     [...buttonValue].map(value => {
//          value.addEventListener("click", () => {
//             clearDisplay();
//             displayBox.textContent += value.textContent;
//             currentNumber = displayBox.textContent;
//             if (operators.includes(value.textContent)) {
//                 operator = value.textContent;
//                 previousNumber = displayBox.textContent.split(operator)[0];
//                 clearDisplay();
//                 //console.log(previousNumber + " " + operator);
//             }
//             if (value.textContent == "AC") {
//                 clearDisplay();
//                 previousNumber = 0;
//                 currentNumber = 0;
//             }
//             if (value.classList == "backspace") {
//                 eraseLastInput();
//             }
//         })
//     })
// }