const numbers = [21, 23, 1165, 17]
console.log(numbers);
console.log(...numbers);

// const max = Math.max(2, 23, 514, 17);
// const max = Math.max(numbers) // NaN
const max = Math.max(...numbers);
console.log(max);

// type 1: copy of array and the push element will reflect in both array
// const first =[2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first, second);

// type 2: copy of array and the push element will not reflect in both array
const first =[2, 3, 4, 5];
const second = [...first];
second.push(6);
const third = [0, 1, ...first, 6, 7, 8, 9 ];

console.log(first);
console.log(second);
console.log(third);

const ages = [12, 13, 14, 15, 16, 17];
const prices = [100, 200, 300, 400, 500, 600];

const all = [...ages, ...prices];
console.log(all);

// spread Object 
const person = {name: 'mtichy', age: 30};
const employee = {...person, salary: 5000, designation: 'developer'};

console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(10, 20, 30);
const digits = [78, 85, 66];
const output = total(...digits);
console.log(output);
