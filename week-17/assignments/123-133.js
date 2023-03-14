// Assignment 1
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama'];

// Needed Output
console.log([...new Set(myFriends)].sort());
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
