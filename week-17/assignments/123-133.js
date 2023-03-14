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
