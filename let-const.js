// ES6

// const 
// console.log(name); // can't access before declaration or initialization
const name = "M Tafsirul Islam Chowdhury";
// name = 'mtichy' // error
const ownersName = 'MTICHY: ' + name;
console.log(ownersName);

// let 
let age = 30;
age = 23;
console.log(age);

//
const charge = 50;
// charge = 100; // error

//
const dress = ['shirt', 'pant', 'polo'];
// dress = []; // error
dress.push('t-shirt');
console.log(dress);

//
const student = {name: 'mtichy', marks: 50};
// student = {name: 'mtichy', marks: 60}; // error
student.marks = 60;
console.log(student);