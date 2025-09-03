// function sum(num1, num2){ //parameter num1 and num2 
// function sum(num1, num2 = 30){ // default parameter num2=20
function sum(num1, num2 = 30){ 
    const total = num1 + num2;
    console.log(num1, num2, total);
}

sum(10,20); // argument 10 and 20
sum(10); // it will take 10 and 30 as default parameter

// NaN ---> not a number 
// sum(10); // argument 10 and undefined if there is no default parameter

function multiply (num1, num2 = 1){
    const result = num1 * num2;
    console.log(result);
}
multiply(10); // argument 10 and 0
multiply(10,20); // argument 10 and 20

function fullName (first, last = ''){
    const name  = first + ' ' + last;
    console.log(name);
}
fullName('mtichy')
/**
 * default value for:
 * 
 * add, sub ---> 0
 * 
 * mul, div ---> 1
 * 
 * string, ---> ''
 */