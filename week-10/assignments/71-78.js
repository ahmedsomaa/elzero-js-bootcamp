// Assignment 1
let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];
let mixed = mix.map((m) => (isNaN(parseInt(m)) ? m : '')).reduce((acc, cur) => acc + cur);
console.log(mixed); // Elzero

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let myString = 'EElllzzzzzzzeroo';
let filtered = myString
    .split('')
    .filter((el, ind, arr) => el !== arr[ind + 1])
    .join('');
console.log(filtered); // Elzero

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];
let flattenedArr = myArray.reduce((acc, curr) =>
    Array.isArray(curr) ? acc + curr.reduce((a, b) => a + b) : acc + curr
);
console.log(flattenedArr); // Elzero

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];
let inverted = numsAndStrings.filter((n) => !isNaN(parseInt(n))).map((e) => -e);
console.log(inverted); // [-1, -10, 10, 20, -5, -3]

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];
let res = nums.reduce((acc, cur) => (cur % 2 === 0 ? acc * cur : acc + cur), 1);
console.log(res); // 500
