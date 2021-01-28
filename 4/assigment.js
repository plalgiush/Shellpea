// 1st task

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

let constNumber = 0.7;

if (randomNumber > constNumber) {
  alert(randomNumber);
} else {
  alert(`${randomNumber} less then 0.7`);
}



// 2nd task

let randomArr = [123,415,46,123,6,11,43324];

for (let i = 0; i < randomArr.length; i++) {
  console.log(randomArr[i]);
};

for (let key of randomArr) {
  console.log(key);
}

for (let j in randomArr) {
  console.log(randomArr[j]);
}



// 3rd task

for (let k = randomArr.length - 1; k >= 0; k--) {
  console.log(randomArr[k]);
};

let reverse = randomArr.reverse();
console.log(reverse);


// 4th task

const newRandom = Math.random();

if (randomNumber > 0.2 && newRandom > 0.2) {
  alert("оба числа больше 0.7");
} else if (randomNumber < 0.2 || newRandom < 0.2) {
  alert("одно из чисел меньше 0.2");
}