let currentResult = 0;

let dataRow = [];


function sum() {
    NewCurrentResult = currentResult + Number(userInput.value);
    currentResult = NewCurrentResult;
    // console.log(currentResult);
    pushData('+', currentResult);
    // console.log(dataRow);
    return currentResult;
}
sum();

function subtract() {
    NewCurrentResult = currentResult - Number(userInput.value);
    currentResult = NewCurrentResult;
    // console.log(currentResult);
    pushData('-', currentResult);
    // console.log(dataRow);
    return currentResult;    
}
subtract();

function multiply() {
    NewCurrentResult = currentResult * Number(userInput.value);
    currentResult = NewCurrentResult;
    // console.log(currentResult);
    pushData('*', currentResult);
    // console.log(dataRow);
    return currentResult; 
}
multiply();

function divide() {
    if (NewCurrentResult == 0 || currentResult == 0 || userInput.value == 0) {
        document.getElementById('input-number').value=""
        } else {
            NewCurrentResult = currentResult / Number(userInput.value);
            currentResult = NewCurrentResult;
            // console.log(currentResult);
            pushData('/', currentResult);
            // console.log(dataRow);
            return currentResult; 
        }
}
divide();


function pushData(operation, resultOut) {

    let story = '0'

    dataRow.push({
        lastResult: currentResult,
        Operand: Number(userInput.value),
        Operation: operation,
        Result: resultOut
    });

    dataRow.forEach(function(item){
        return story = `${story} ${item.Operation} ${item.Operand}`
    })

    console.log(dataRow)
    outputResult(resultOut, story)
}

plus = addBtn.addEventListener('click', sum);
minus = subtractBtn.addEventListener('click', subtract);
multi = multiplyBtn.addEventListener('click', multiply);
DivideBtn = divideBtn.addEventListener('click', divide);

