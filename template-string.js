// show as syntax error 
// const poem = 'aam pata jora jora
// marbo chabuk chorbo ghora'
//console.log(poem);

// by using + for add strings 
// const InALinePoem = 'aam pata jora jora' + 'marbo chabuk chorbo ghora' + 'ore bubu sore dara' + 'asche amr pagla ghura\n';

// console.log(InALinePoem);

// const poem = 'aam pata jora jora\n' + 'marbo chabuk chorbo ghora\n' + 'ore bubu sore dara\n' + 'asche amr pagla ghura\n';

// console.log(poem);

// template string with backtick ``
const poem = `aam pata jora jora
marbo chabuk chorbo gora 
ore bubu sore dara
ashce amr pagla ghora`

console.log(poem);

function sum (num1, num2){
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is: ' + result; //in string concatenation we have to make space by using space between + sign in a srting

    // template string
    const output = `sum of ${num1} and ${num2} is: ${result}`
    console.log(output);
}
sum(10, 20);

const price = 100;
const discountedPrice = `Total amount after 20% discount is: ${price * 0.8} taka`
console.log(discountedPrice);