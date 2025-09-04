//function declaration
function add(num1, num2) {
    return num1 + num2;
}

// function expression
const addition = function(num1, num2) {
    return num1 + num2;
}

const result = addition(17, 13)
console.log(result);

// arrow function
const add2 = (num1, num2) => num1 + num2
const multiply = (a, b) => a * b
const sumAll = (a, b, c, d, e) => a + b + c + d + e
const isFirstBig = (x, y) => x > y

const result2 = add2 (23, 13)
console.log(result2);
const mul = multiply(4, 6)
console.log(mul);
const addAll = sumAll(4, 5, 6, 9, 8)
console.log(addAll);
const bigger = isFirstBig(67, 13)
console.log(bigger);

// multiline arrow function 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiply = x * y;
    const divide = x / y;
    return sum + diff + multiply + divide;
}

const result3 = doMath(12, 3)
console.log(result3);

const sayHello = () => console.log("Hello World");
sayHello();
