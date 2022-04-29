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

//Create buttons for clear and backspace && add event listeners

const clearButton = document.createElement("button");
clearButton.classList.add("clear");
clearButton.textContent = "AC";
document.getElementById("longButtons").appendChild(clearButton);
clearButton.addEventListener("click", () => {
    displayBox.textContent = "";
});

const backspace = document.createElement("button");
backspace.classList.add("backspace");
backspace.innerHTML = `<i value="backspace" class="fa-solid fa-delete-left fa-1x"></i>`;
document.getElementById("longButtons").appendChild(backspace);
backspace.addEventListener("click", () => {
    alert("hello");
});


//Create buttons for numbers, decimal, and equals && add event listeners

function createNumberButtons() {
    let numbers;
    for (let i = 0; i < 10; i++) {
        numbers = document.createElement("button");
        numbers.classList.add("number");
        document.getElementById("numbers").appendChild(numbers);
        numbers.textContent = `${value=[i]}`;
        numbers.addEventListener("click", () => {
            const numbersArray = (document.querySelectorAll(".number"));
            const numbersValue = [...numbersArray].map(number => parseInt(number.textContent));
            console.log(numbersValue)
            displayBox.textContent += numbersValue[i];
    })
};
}

function createDecimalButton() {
    const decimal = document.createElement("button");
    decimal.classList.add("decimal");
    document.getElementById("numbers").appendChild(decimal);
    decimal.textContent = `${value="."}`;
    decimal.addEventListener("click", () => {
        displayBox.textContent += decimal.textContent;
    });
}

function createEqualsButton() {
    const equals = document.createElement("button");
    equals.classList.add("equals");
    document.getElementById("numbers").appendChild(equals);
    equals.textContent = `${value="="}`;
    equals.addEventListener("click", () => {
        alert("hello");
    });
}

createNumberButtons();
createDecimalButton();
createEqualsButton();

//Create buttons for operators && add event listeners

function createOperatorButtons() {
    let operators = ["/", "x", "-", "+"];
    let symbol;
    for (let i = 0; i < 4; i++) {
        symbol= document.createElement("button");
        symbol.classList.add("operator");
        document.getElementById("operators").appendChild(symbol);
        symbol.textContent = `${operators[i]}`;
        symbol.addEventListener("click", () => {
            const symbolsArray = (document.querySelectorAll(".operator"));
            const symbolsValue = [...symbolsArray].map(symbol => symbol.textContent);
            console.log(symbolsValue);
            if (displayBox.textContent == "") {
                displayBox.textContent = "nope"
            } else {
                displayBox.textContent += (symbolsValue[i]);
            }
        });
    };
}

createOperatorButtons();


//Functions to populate the display when you click a button

//const buttonsArray = ["AC", "backspace", "0", "1", "2", "3", "4", 
//"5", "6", "7", "8", "9", ".", "=", "/", "x", "-", "+"];

function leftHandSide() {

}

function pressOperator() {

}

function rightHandSide(b) {

}

function equate() {

}