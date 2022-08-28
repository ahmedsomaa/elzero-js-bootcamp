let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// Req #1
my.reverse().splice(zero, counter - ++zero);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// Req #2
console.log(my.slice(zero, counter)); // ["Elham", "Mazero"]

// Req #3
console.log(my[zero].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"

// Req #4
console.log(my[counter][my[counter].length - counter] + my[zero][zero]); // "rO"
