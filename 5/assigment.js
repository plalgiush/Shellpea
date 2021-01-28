function sayHello(name) {
    console.log('Hi ' + name);
  }
  
  sayHello();

sayHello = (name) => {
    console.log('Hi ' + name);
}

sayHello();



firstCopy = (priv, name) => {
    console.log(priv + name);
}

firstCopy('Hi ', 'Ivan');



secondCopy = () => {
    console.log('Hi ' + name);
}

secondCopy('Petr');



thirdCopy = (name) => {
    return name;
}

thirdCopy('Vasiliy');

console.log(thirdCopy());


checkInput = (input) => {
    console.log(input);
}

input = () => {
    let space = '';
    let ask = prompt('value or string','');
    return ask;
}

input();