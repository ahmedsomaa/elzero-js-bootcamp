// Challenge 1

// Regular Function Syntax
let namesRegular = function (...namesList) {
    return `[${namesList.join('],').split(',').join(', [').concat('] => Done !')}`;
};

// Arrow Function Syntax
let names = (...namesList) => `String [${namesList.join('], [')}] => Done !`;

console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim'));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

//----------------------------------------------------------------------------------------------------------------------

// Challenge 2

let myNumbers = [20, 50, 10, 60];

// Arrow Function Syntax
let calc = (one, two, ...nums) => one + two + nums.pop();

// Regular Function Syntax
let calcReg = function (one, two, ...nums) {
    return one + two + nums.pop();
};

console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80
