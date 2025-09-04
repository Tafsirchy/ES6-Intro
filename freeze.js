const employee = {
    name: 'John',
    age: 30,
    designation: 'developer',
    salary: 50000,
    experience: 1

}
Object.freeze(employee);

delete employee.experience;
// delete employee.salary;

employee.location = 'Dhaka'
employee.salary = employee.salary + 6000
console.log(employee);
