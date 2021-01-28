const arr = [5, 32, 5, 21, 123, 53, 3, 12, 123, 5];

const num = [1, 2, 5, 6, 10];

let moreThanFive = arr.filter(function(i) {
    return i > 5;
});

console.log(moreThanFive);

// or

console.log(arr.filter(item => item > 5));



// каждое число массива перемноженное на значение из объекта
const obj = {value: 2};

const makeMap = function(number) {
    return number * obj.value;
};

const exitMap = arr.map(makeMap);

console.log(exitMap);

// or

const objValue = {value: 2}

console.log(num.map((number) => { return number * objValue.value }));



// все числа массива перемноженные между собой
const makeReduce = function(multi, current) {
    return multi * current;
};

const exitReduce = arr.reduce(makeReduce);

console.log(exitReduce);

// or

console.log((num).reduce((accumulator, currentValue) => accumulator * currentValue));



// сортировка массива от меньшего к большему

const rangeToMax = function(a, b) {
    return a - b;
}

const exitRangeFindMax = arr.sort(rangeToMax);

console.log(exitRangeFindMax);

// or

const secondRangeFindMax = arr.sort( (a, b) => a - b );

console.log(secondRangeFindMax);



// самое большое число в массиве

const findMax = Math.max.apply(null, secondRangeFindMax);

console.log(findMax);

// 

const Max = Math.max.apply(null, arr);

console.log(Max);


// минимальное число в массиве

const Min = Math.min.apply(null, arr);

console.log(Min);


// max and min result 

const MaxMin = () => {
    console.log(Math.max.apply(null, arr));
    console.log(Math.min.apply(null, arr));
}

MaxMin();
