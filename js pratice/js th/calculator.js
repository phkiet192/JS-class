// const initApp = () => {
//        const currentValueElem = document.querySelector('.currentvalue');
//        const previousValueElem = document.querySelector('.previousvalue');
//        let itemArray = [];
//        let newNumberFlag = false;

//        const inputButtons = document.querySelectorAll('.number');
//        inputButtons.forEach(button => {
//            button.addEventListener('click', (event) => {

//                 const newInput = event.target.textContent;
//                 if (newNumberFlag) {
//                     currentValueElem.value = newInput;
//                     newNumberFlag = false;
//                 } else {
//                     currentValueElem.value = 
//                          currentValueElem.value == 0
//                             ? newInput
//                             : `${currentValueElem.value}${newInput}`;
//                 }
//          })
//        })
        
//        const opButtons = document.querySelectorAll('.operator');
//        opButtons.forEach(button => {
//            button.addEventListener('click', (event) => {

//             if (newNumberFlag) {
//                 previousValueElem = "";
//                 itemArray = [];
//             }
//             const newOperator = event.target.textContent;
//             const currentVal = currentValueElem.value;

//             if (!itemArray.length && currentVal == 0) return;

//             if (!itemArray.length) {
//                 itemArray.push(currentVal, newOperator);
//                 previousValueElem.textContent =
//                 `${currentVal}
//                 ${newOperator}`;
//                 return newNumberFlag = true;

//             }

//             if(itemArray.length) {
//                 itemArray.push(currentVal);

//                 const equationObj = {
//                     num1: parseFloat(itemArray[0]),
//                     num2: parseFloat(currentVal),
//                     op: itemArray[1]
//                 }

//                 equationArray.push(equationObj);
//                 const equationString =
//                      `${equationObj['num1']}
//                      ${equationObj['op']}
//                      ${equationObj[num2]}`;
//                 const newValue = calculate(equationString, currentValueElem);
//             }
//             previousValueElem.textContent = 
//                   `${newValue} ${newOperator}`;

//             itemArray = [newValue, newOperator];
//             newNumberFlag = true;
//             console.log(equationArray);
//            })
//        })


//        const clearButtons = document.querySelectorAll('.clear');
//        clearButtons.forEach(button => {
//            button.addEventListener('click', (event) => {
//                currentValueElem.value = 0;
//                if (event.target.classList.contains('.clear')) {
//                    previousValueElem.textContent = '';
//                    itemArray = [];
//                }
//            })
//        })
// }
// document.addEventListener("DOMContentLoaded", initApp);
// const calculate = (equation, currentValueElem) => {
//          const regex = /(^[*/=])|(\s)/g;
//         equation.replace(regex, '');
//         const divByZero = /(\/0).test(equation);
//         if(divByZero) return currentValueElem.value = 0;
//         return currentValueElem.value = eval(equation); 
// }
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('number'));
 buttons.map( button => {
     button.addEventListener('click', (e) => {
         switch(e.target.innerText) {
             case 'C':
                 display.innerText = '';
                 break;
             case '=':
                     display.innerText = eval(display.innerText);
                  break;
             default:
                 display.innerText += e.target.innerText;
         }
     })
 })