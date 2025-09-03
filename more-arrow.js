// 20% discount = 20/100*100
// normal arrow function 
const getText = (amount, texRate) => amount * texRate / 100;
const add = (p, q) => p + q;

// single parameter
const getSquare = (x) => x*x;
console.log(getSquare(8));

const getHalf = x => x/2;
console.log(getHalf(44));

const firstElement = numbers => numbers[0];
console.log(firstElement([44, 55, 66, 77, 88]));

// no parameter 
const logIt = () => console.log('I am a function')
// console.log(logIt()); // undefined 
logIt();

// annonymous function
// document.getElementById('').addEventListener('click', () =>{

// })

document.getElementById('btn').addEventListener('click', event => {

})

// () => {

// }