// Assignment 1
console.log(100000);
console.log(100_000);
console.log(1e5);
console.log(5e4 + 5e4);
console.log(2e5 - 1e5);
console.log(2e3 * 5e1);
console.log(1e6 / 1e1);
console.log(10 ** 5);
console.log(1e5 % 1e10);
console.log(Math.pow(10, 5));
console.log();
console.log();
console.log();

// Assignment 2
console.log(Number.MAX_SAFE_INTEGER);

// Assignment 3
console.log(Number.MAX_SAFE_INTEGER.toString().length);

// Assignment 4
let myVar = '100.56789 Views';

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 10.57

// Assignment 5
let num = 10;

console.log(+Number.isInteger(10) + +true);

// Assignment 6
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed())); // 10

// Assignment 7
console.log(Math.floor(Math.random() * (4 - 0 + 1))) + 0;
