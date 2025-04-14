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
        //calculatorArray.push(button.textContent);

    })
});

let operatorButtonClick = document.querySelectorAll('.button\\/, .button\\+, .button\\-, .button\\*')
operatorButtonClick.forEach(button => {
    button.addEventListener('click', function(){
        calculatorArray.push(displayString.slice(0, -1));
        calculatorArray.push(displayString.slice(-1));
        displayString = '';

    })
})

let solutionClick = document.querySelector(".button\\=");
solutionClick.addEventListener('click', function() {
    calculatorArray.push(displayString);
    solution = operate(parseInt(calculatorArray[0]), calculatorArray[1], parseInt(calculatorArray[2]));
    document.getElementById('display').textContent = solution;
    calculatorArray.length = 0;
    solution = null;
});





/*for (let i = 1; i < numberOfButtons; i++) {
   let myButtons = document.createElement('button');
   myButtons.classList.add('myButtons');

   if (i === 1) {
    myButtons.textContent = "AC";
   } else if (i === 2) {
    myButtons.textContent = "+/-";
   }
     else if (i === 3) {
        myButtons.textContent = "%";
     }
     else if (i === 4) {
        myButtons.textContent = "/";
     }
     else if (i > 4 && i <= 7) {
        myButtons.textContent = `${i+2}`;
     }
     else if (i === 8) {
        myButtons.textContent = "*";
     }
     else if (i > 8 && i <= 11) {
        myButtons.textContent = `${i-5}`;
     }
     else if (i === 12) {
        myButtons.textContent = "-";
     }
     else if (i > 12 && i <= 15) {
        myButtons.textContent = `${i-12}`;
     }
     else if (i === 16) {
        myButtons.textContent = "+";
     }
     else if (i === 17) {
        myButtons.textContent = `${i-17}`;
     }
     else if (i === 18) {
        myButtons.textContent = ".";
     }
     else if (i === 19) {
        myButtons.textContent = "=";
     }

     document.getElementById('buttons').appendChild(myButtons);


}*/

