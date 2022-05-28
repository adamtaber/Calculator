let numberButtons = document.querySelectorAll('div.numeric > button');
let numberScreen = document.getElementById("numberScreen");
let clearButton = document.getElementById("clear");
let operatorButtons = document.querySelectorAll('div.nonNumeric > button.operator');
let equalButton = document.getElementById("equal");
let negativeButton = document.getElementById("negative");
let percentageButton = document.getElementById("percentage");
let decimal = document.getElementById("decimal");
let operator;
let valueOne;
let valueTwo;
let toggle = false;
let equalToggle = false;
let numberToggle = false;
let decimalToggle = false;

const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
}

resizeOps();
window.addEventListener("resize", resizeOps);

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
    if(numberToggle === true) {
        numberScreen.innerText = "";
        for (i = 0; i < operatorButtons.length; i++ ) {
            operatorButtons[i].classList.remove("activate");
        }
        numberToggle = false;
    }
    if(equalToggle === true) {
        valueOne = 0;
        valueTwo = 0;
        operator = 0;
        toggle = false;
    }
    numberScreen.innerText += this.innerText;
    clearButton.innerHTML = "C"
    equalToggle = false;
}))

decimal.addEventListener('click', function() {
    decimal.disabled = true;
})


clearButton.addEventListener('click', function() {
    numberScreen.innerText = "";
    valueOne = null;
    valueTwo = null;
    operator = null;
    this.innerText = "AC"
    toggle = false;
    equalToggle = false;
    numberToggle = false;
    for (i = 0; i < operatorButtons.length; i++ ) {
        operatorButtons[i].classList.remove("activate");
    }
})

negativeButton.addEventListener('click', function() {
    numberScreen.innerText = `${numberScreen.innerText * (-1)}`;
})

percentageButton.addEventListener('click', function() {
    numberScreen.innerText = `${numberScreen.innerText / 100}`
})

operatorButtons.forEach(btn => btn.addEventListener('click', function () {
    if(equalToggle === true) {
        operator = this.innerText;
        valueOne = numberScreen.innerText;
        toggle = true;
        this.classList.add("activate")
        equalToggle = false;
        numberToggle = true;
        decimal.disabled = false;
    }else if(toggle === false) {
        operator = this.innerText;
        valueOne = numberScreen.innerText;
        toggle = true;
        this.classList.add("activate")
        decimal.disabled = false;
        numberToggle = true;
    }else if(toggle === true) {
        valueTwo = numberScreen.innerText;
        if(operator === "/" && valueTwo === "0") {
            numberScreen.innerText = "hey, stop that";
            return;
        }
        if((Math.round((operate() + Number.EPSILON) * 1000)/1000) > 99999999999) {
            numberScreen.innerText = (operate() + Number.EPSILON).toExponential(3);
        }else if((Math.round((operate() + Number.EPSILON) * 1000)/1000) < 99999999999) {
        numberScreen.innerText = Math.round(operate() * 1000)/1000;
        }
        operator = this.innerText;
        valueOne = numberScreen.innerText;
        this.classList.add("activate")
        numberToggle = true;
        decimal.disabled = false;

    }
}))


equalButton.addEventListener('click', function () {
    if(equalToggle === true) {
        return;
    }else if(equalToggle === false) {
        valueTwo = numberScreen.innerText;
        if(operator === "/" && valueTwo === "0") {
            numberScreen.innerText = "hey, stop that";
            decimal.disabled = false;
            return;
        }
        if(valueTwo === null || valueOne === null || operator === null) {
            decimal.disabled = false;
            return;
        }
        if((Math.round((operate() + Number.EPSILON) * 1000)/1000) > 99999999999) {
            numberScreen.innerText = (operate() + Number.EPSILON).toExponential(3);
        }else if((Math.round((operate() + Number.EPSILON) * 1000)/1000) < 99999999999) {
        numberScreen.innerText = Math.round((operate() + Number.EPSILON) * 1000)/1000;
        }
        valueOne = numberScreen.innerText;
        toggle = true;
        equalToggle = true;
        numberToggle = true;
        decimal.disabled = false;
    }
})



/* number: display as string
operator: set valueOne (toggle: false), toggle to true and register operator
number: display as string
equal: setValueTwo (toggle: true), perform operation
operator2: setValueTwo (toggle: true), perform operation and input to screen, setValueOne*/

