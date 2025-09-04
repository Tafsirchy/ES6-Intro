const numbers = [12, 45, 78, 98, 67, 89];

for(const number of numbers){
    // console.log(number);
}

const employee = {
    name: 'John',
    age: 30,
    designation: 'developer',
    salary: 50000,
    experience: 1
}

for(const key in employee){
    // const value = employee[key];
    // console.log(key, value);
    console.log(key, employee[key])
}

const keys = Object.keys(employee);
console.log(keys);

for (const key of keys){
    // console.log(key)
    console.log(key, employee[key]);
}