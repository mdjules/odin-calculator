function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b; 
};

function operate(numOne, operator, numTwo) {
    if (operator == '+') {
        let operateSolution = add(numOne, numTwo);
        return operateSolution;
    } else if (operator == '-') {
        let operateSolution = subtract(numOne, numTwo);
        return operateSolution;
    } else if (operator == '*') {
        let operateSolution = multiply(numOne, numTwo);
        return operateSolution;
    } else if (operator == '/') {
        let operateSolution = divide(numOne, numTwo);
        return operateSolution;
    }
    
};

const buttonArray = [
    'AC', '+/-', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '='
];

for (button in buttonArray) {
    let myButtons = document.createElement('button');
    myButtons.classList.add('myButtons', `button${buttonArray[button]}`);
    myButtons.textContent = `${buttonArray[button]}`;
    document.getElementById('buttons').appendChild(myButtons);

};

let calculatorArray = [];
let displayString = "";

let buttonClick = document.querySelectorAll('.myButtons');
buttonClick.forEach(button => {
    button.addEventListener('click', function(){
        displayString += button.textContent;
        document.getElementById('display').textContent = displayString;

    })
});

let operatorButtonClick = document.querySelectorAll('.button\\/, .button\\+, .button\\-, .button\\*')
operatorButtonClick.forEach(button => {
    button.addEventListener('click', function(){
        calculatorArray.push(displayString.slice(0, -1));
        calculatorArray[1] = button.textContent;


    })
})

let solutionClick = document.querySelector(".button\\=");
solutionClick.addEventListener('click', function() {

    const operatorIndex = displayString.search(/[+\-*/]/); //search for index of operator

    if (operatorIndex === -1) return; //no operator returns nothing

    let secondNum = displayString.slice(operatorIndex + 1); //slice string based on operators position and return the rest for multi digit numbers

    calculatorArray.push(secondNum); //add second number to the calculator array

    
    solution = operate(parseFloat(calculatorArray[0]), calculatorArray[1], parseFloat(calculatorArray[2]));
    solution = Number(solution.toFixed(1)); //round to 1 decimal places
    document.getElementById('display').textContent = solution;
    
    calculatorArray[0] = solution; //first element of the array becomes the previous solution so chained solutions can be performed
    calculatorArray.splice(1);
    solution = null;
    displayString = ""
});

let clearClick = document.querySelector('.buttonAC');
clearClick.addEventListener('click', function() {
    document.getElementById('display').textContent = "";
    displayString = '';
    solution = null;
    calculatorArray.length = 0;
});


