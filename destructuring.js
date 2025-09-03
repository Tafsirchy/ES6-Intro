// const product = {name: 'shirt', price: 1000, quantity: 5};
// console.log(product.name);

// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);

// const price = product.price;

// const discount = price * 20/100;
// const yourPay = price - discount;
// const vatAmount = price * 7/100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);

// const price = product.price;
// const {price, quantity} = {name: 'shirt', price: 1000, quantity: 5};
// console.log(price, quantity);

// const {price, quantity, tax} = {name: 'shirt', price: 1000, quantity: 5};
// console.log(price, quantity, tax);

const {price, quantity, tax = 10} = {name: 'shirt', price: 1000, quantity: 5};
console.log(price, quantity, tax);

const discount = price * 20/100;
const yourPay = price - discount;
const vatAmount = price * 7/100;
const totalAmount = yourPay + vatAmount;
console.log(totalAmount);


const device = { name: 'laptop', brand: 'Asus', price: 50000, color: 'black'};

const {brand} = device;
console.log(brand);

//----------------------------------//

const numbers =[54, 55, 66, 77, 88, 99];
const [first, second,] = numbers;
console.log(first, second);

const [math, physics] = [78, 87] ;
console.log(math, physics);