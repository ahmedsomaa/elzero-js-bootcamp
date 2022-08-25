// Assignment 1
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

// Assignment 2
let num = 3;

// Solution One
console.log(num + num); // 6  num = 3

// Solution Two
console.log(num * num - num); // 6 num = 3

// Soultion Three
console.log(num++ + --num); // 6 num = 3

// Soultion Four
console.log(num + +true + --num); // 6 num = 2

// Solution Five
console.log(num ** num + num++); // 6 num = 3

// Solution Six
console.log((num++ * num--) / --num); // 6 num = 2

// Assignment 3
let n = '10';

// Solution One
console.log(+n + +n); // 20

// Solution Two
console.log(n++ + --n); // 20

// Solution Three
console.log(n * (+true + +true)); // 20

// Solution Four
console.log(++n * n-- - n * n - +true); // 20

// Assignment 4
let points = 10;

// Write Your Code Here
points += +true + +true + +true;
console.log(points); // 13

// Write Your Code Here
points = (points-- % --points) * (+true + +true + +true + +true);
console.log(points); // 8;
