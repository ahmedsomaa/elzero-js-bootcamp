// Assignment 1
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama'];

console.log([...new Set(myFriends)].sort());
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt'
};

let map = new Map(Object.entries(myInfo));
console.log(map);
console.log(map.size);
console.log(map.has('role'));
// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
let theNumber = 100020003000;

console.log(+[...new Set([...theNumber.toString()].sort().slice())].join(''));
// Needed Output
// 123;

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
let theName = 'Elzero';

console.log(Array.from(theName));
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//----------------------------------------------------------------------------------------------------------------------

// Assignment 6
function convert(arr) {
  const digits = [...arr].filter((c) => typeof c === 'number');
  const nondigits = [...arr].filter((c) => typeof c !== 'number');
  const modifiedArr = [...digits, ...nondigits];
  const len = digits.length;
  return [...modifiedArr].copyWithin(0, len, len * 2);
}

let chars = ['A', 'B', 'C', 'D', 'E', 10, 15, 6];
console.log(convert(chars));
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

chars = ['A', 'B', 'C', 20, 'D', 'E', 10, 15, 6];
console.log(convert(chars));
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

chars = ['Z', 'Y', 'A', 'D', 'E', 10, 1];
console.log(convert(chars));
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

//----------------------------------------------------------------------------------------------------------------------

// Assignment 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
// Needed Output
// [1, 2, 3, 4, 5, 6]
