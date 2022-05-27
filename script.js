/* create a function for each of the four main operations */

function add(valueOne, valueTwo) {
    return valueOne + valueTwo;
}

function subtract(valueOne, valueTwo) {
    return valueOne - valueTwo;
}

function multiply(valueOne, valueTwo) {
    return valueOne * valueTwo;
}

function divide(valueOne, valueTwo) {
    return valueOne / valueTwo;
}

/* create operate function */

function operate(valueOne, operator, valueTwo) {
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

/* create function to populate textbox when buttons are pressed */

let numberButtons = document.querySelectorAll('div.numeric > button');
let numberScreen = document.getElementById("numberScreen");
let clearButton = document.getElementById("clear");

numberButtons.forEach(btn => btn.addEventListener('click', function() {
    numberScreen.innerHTML += this.innerHTML;
}))

clearButton.addEventListener('click', function() {
    numberScreen.innerHTML = "";
})

let displayValue = numberScreen.innerHTML;

let operatorButtons = document.querySelectorAll('div.nonNumeric > button');
let operator;
let operatorAdd = document.querySelector("div.nonNumeric > .add");
let operatorClass = operatorAdd.classList;
/*let operatorSubtract = document.querySelector("div.nonNumeric > .subtract");
let operatorClassSubtract = operatorSubtract.classList;
let operatorMultiply = document.querySelector("div.nonNumeric > .multiply");
let operatorClassMultiply = operatorMultiply.classList;
let operatorDivide = document.querySelector("div.nonNumeric > .divide");
let operatorClassDivide = operatorDivide.classList;*/
let toggle;

operatorButtons.forEach(btn => btn.addEventListener('click', function () {
    operator = this.innerHTML;
    toggle = operatorClass.toggle("true")
    if(toggle) {
        this.style.backgroundColor = 'white';
            this.style.color = 'rgb(255,132,0)'
    }else {
        this.style.backgroundColor = 'rgb(255,132,0)'
        this.style.color = 'white';
    }
    /*if(this.innerHTML === "+") {
        operator = "+";
        toggle = operatorClass.toggle("True")
        if(toggle) {
            this.style.backgroundColor = 'white';
            this.style.color = 'rgb(255,132,0)'
        }else {
            this.style.backgroundColor = 'rgb(255,132,0)'
            this.style.color = 'white';
        }
    }else if(this.innerHTML === "-") {
        operator = "-";
        toggle = operatorClass.toggle("testTwo")
        if(toggle) {
            this.style.backgroundColor = 'white';
            this.style.color = 'rgb(255,132,0)'
        }else {
            this.style.backgroundColor = 'rgb(255,132,0)'
            this.style.color = 'white';
        }
    }else if(this.innerHTML === "*") {
        operator = "*";
        toggle = operatorClass.toggle("testTwo")
        if(toggle) {
            this.style.backgroundColor = 'white';
            this.style.color = 'rgb(255,132,0)'
        }else {
            this.style.backgroundColor = 'rgb(255,132,0)'
            this.style.color = 'white';
        }
    }else if(this.innerHTML === "/") {
        operator = "/";
        toggle = operatorClass.toggle("testTwo")
        if(toggle) {
            this.style.backgroundColor = 'white';
            this.style.color = 'rgb(255,132,0)'
        }else {
            this.style.backgroundColor = 'rgb(255,132,0)'
            this.style.color = 'white';
        }
    }*/
}))

