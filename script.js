//Operator functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
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
    let numbers = document.createElement("button");
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
    let symbol = document.createElement("button");
    document.getElementById("operators").appendChild(symbol);
    symbol.textContent = textContent;
    symbol.classList = classList;
}

for (let j = 0; j < operators.length; j++) {
    createOperatorButton(`operator${[j]}`, `${operators[j]}` )
}

//Functions to populate the display when you click a button

// const buttonsArray = ["AC", "backspace", "0", "1", "2", "3", "4", 
// "5", "6", "7", "8", "9", ".", "=", "/", "x", "-", "+"];
// let numberOne = document.getElementsByClassName("number");
// let nextNumber = numberOne + nextNumber;
// const decimal = document.getElementsByClassName("decimal");

function leftHandSide(a) {
    //a = any number button or decimal button
    //a is not an operator and nothing happens if equals sign is pressed
    // allow up to 9 characters
    // must be a number or a decimal
    // can only have 1 decimal
    //populate on display
    //     store into a variable once an operator is clicked
    //     show a + operator on the display
}

function pressOperator(sym) {
    //sym = any of the 4 operators
    //can press as many operators until another # is clicked
    //the last operator pressed before the second # is the one that is used
}

function rightHandSide(b) {
    //b = any number button or decimal button
    //allow up to 9 characters
    //can only have 1 decimal
    //populate on display
    //if equals is pressed, display operate(sym, a, b)
    //if operator is pressed, display operate(sym, a, b) + new sym
}

function equate(equal) {
    //equal == "="
    //if equals is pressed, display operate(sym, a, b)
    //disable backspace
}

//Populate the display




//Doesn't work:
// const numberClick = () => {
//     for (let i = 0; i < 10; i++) {
//         const numbersArray = document.getElementsByClassName("number");
//         numbersArray.addEventListener("click", (e) => {
//             const numbersValue = [...numbersArray].map(number => parseInt(number.textContent));
//             console.log(numbersValue)
//             displayBox.textContent += numbersValue[i];
//         })
//     };
// }

// numberClick();

//Doesn't work:
//createAllClear("clear", "AC", (addEventListener("click", () => displayBox.textContent = "")));
//Also doesn't work:
// function buttonPress() {
//     const press = document.getElementsByClassName("clear");
//     press.addEventListener("click", () => displayBox.textContent = "");
// }

//****Old 
// function createNumberButtons() {
//     let numbers;
//     for (let i = 0; i < 10; i++) {
//         numbers = document.createElement("button");
//         numbers.classList.add("number");
//         document.getElementById("numbers").appendChild(numbers);
//         numbers.textContent = `${value=[i]}`;
//         numbers.addEventListener("click", () => {
//             const numbersArray = (document.querySelectorAll(".number"));
//             const numbersValue = [...numbersArray].map(number => parseInt(number.textContent));
//             console.log(numbersValue)
//             displayBox.textContent += numbersValue[i];
//     })
// };
// }

// function createOperatorButtons() {
//     const operators = ["/", "x", "-", "+"];
//     let symbol;
//     for (let i = 0; i < 4; i++) {
//         symbol= document.createElement("button");
//         symbol.classList.add("operator");
//         document.getElementById("operators").appendChild(symbol);
//         symbol.textContent = `${operators[i]}`;
//         symbol.addEventListener("click", () => {
//             const symbolsArray = (document.querySelectorAll(".operator"));
//             const symbolsValue = [...symbolsArray].map(symbol => symbol.textContent);
//             console.log(symbolsValue);
//             if (displayBox.textContent == "") {
//                 displayBox.textContent = "nope"
//             } else {
//                 displayBox.textContent += (symbolsValue[i]);
//             }
//         });
//     };
// }

// createOperatorButtons();