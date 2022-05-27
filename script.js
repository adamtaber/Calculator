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


