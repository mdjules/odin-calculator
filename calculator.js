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

let numberOfButtons = 19;

const buttonArray = [
    'AC', '+/-', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '='
];

for (button in buttonArray) {
    let myButtons = document.createElement('button');
    myButtons.classList.add('myButtons', `${buttonArray[button]}Button`);
    myButtons.textContent = `${buttonArray[button]}`;
    document.getElementById('buttons').appendChild(myButtons);

};




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

