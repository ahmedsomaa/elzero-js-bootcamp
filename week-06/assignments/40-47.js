// Assignment 1
let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop(); // myFriends.length = 3
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
let arrOne = ['C', 'D', 'X'];
let arrTwo = ['A', 'B', 'Z'];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
let website = 'Go';
let words = [`${website}ogle`, 'Facebook', ['Elzero', 'Web', 'School']];

console.log(words[website.length][5 - website.length - words.length].slice(website.length).toUpperCase()); // ZERO

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];

// Write 3 Solutions

// Solution #1
if (haystack.indexOf(needle) !== -1) {
    console.log('Found');
}

// Solution #2
if (haystack.lastIndexOf(needle)) {
    console.log('Found');
}

// Solution #3
if (haystack.includes(needle)) {
    console.log('Found');
}

//----------------------------------------------------------------------------------------------------------------------

// Assignment 6
let arr1 = ['A', 'C', 'X'];
let arr2 = ['D', 'E', 'F', 'Y'];
let allArrs = [];

// Your Code Here
allArrs.push(arr1.pop(), arr2.pop(), arr2.pop());
allArrs = allArrs.sort().join('').toLowerCase();
console.log(allArrs); // fxy
