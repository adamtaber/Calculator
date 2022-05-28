/* create a function for each of the four main operations */

let numberButtons = document.querySelectorAll('div.numeric > button');
let numberScreen = document.getElementById("numberScreen");
let clearButton = document.getElementById("clear");
let operatorButtons = document.querySelectorAll('div.nonNumeric > button.operator');
let equalButton = document.getElementById("equal");
let negativeButton = document.getElementById("negative");
let percentageButton = document.getElementById("percentage");
let operator;
let valueOne;
let valueTwo;
let toggle = false;
let equalToggle = false;



function add(valueOne, valueTwo) {
    return Number(valueOne) + Number(valueTwo);
}

function subtract(valueOne, valueTwo) {
    return Number(valueOne) - Number(valueTwo);
}

function multiply(valueOne, valueTwo) {
    return Number(valueOne) * Number(valueTwo);
}

function divide(valueOne, valueTwo) {
    return Number(valueOne) / Number(valueTwo);
}

/* create operate function */

function operate() {
    if(operator === "+") {
        return add(valueOne, valueTwo);
    }else if (operator === "-") {
        return subtract(valueOne, valueTwo);
    }else if (operator === "*") {
        return multiply(valueOne, valueTwo);
    }else if (operator === "/") {
        return divide(valueOne, valueTwo);
    }
}

numberButtons.forEach(btn => btn.addEventListener('click', function() {
    if(toggle === true) {
        numberScreen.innerText = "";
        for (i = 0; i < operatorButtons.length; i++ ) {
            operatorButtons[i].style.backgroundColor = 'rgb(255,132,0)';
            operatorButtons[i].style.color = 'white';
        }
    }
    numberScreen.innerText += this.innerText;
    clearButton.innerHTML = "C"
    equalToggle = false;
}))

clearButton.addEventListener('click', function() {
    numberScreen.innerText = "";
    valueOne = 0;
    valueTwo = 0;
    operator = 0;
    this.innerText = "AC"
    toggle = false;
    equalToggle = false;
    for (i = 0; i < operatorButtons.length; i++ ) {
        operatorButtons[i].style.backgroundColor = 'rgb(255,132,0)';
        operatorButtons[i].style.color = 'white';
    }
})



operatorButtons.forEach(btn => btn.addEventListener('click', function () {
    if(equalToggle === true) {
        operator = this.innerText;
        valueOne = numberScreen.innerText;
        toggle = true;
        this.style.backgroundColor = 'white';
        this.style.color = 'rgb(255,132,0)';
        equalToggle = false;
    }else if(toggle === false) {
        operator = this.innerText;
        valueOne = numberScreen.innerText;
        /*toggle = operatorClass.toggle("true")
        if(toggle) {*/
        toggle = true;
        this.style.backgroundColor = 'white';
        this.style.color = 'rgb(255,132,0)';
    }else if(toggle === true) {
        valueTwo = numberScreen.innerText;
        numberScreen.innerText = operate();
        operator = this.innerText;
        valueOne = numberScreen.innerText;
        this.style.backgroundColor = 'white';
        this.style.color = 'rgb(255,132,0)';

    }
}))

equalButton.addEventListener('click', function () {
    if(equalToggle === true) {
        return;
    }else if(equalToggle === false) {
        valueTwo = numberScreen.innerText;
        numberScreen.innerText = operate();
        valueOne = numberScreen.innerText;
        toggle = true;
        equalToggle = true;
    }
})



/* number: display as string
operator: set valueOne (toggle: false), toggle to true and register operator
number: display as string
equal: setValueTwo (toggle: true), perform operation
operator2: setValueTwo (toggle: true), perform operation and input to screen, setValueOne*/

