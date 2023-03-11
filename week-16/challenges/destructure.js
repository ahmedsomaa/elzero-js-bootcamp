// Destructuring Challenge
let chosen = 1;

let myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] }
];

// Write Your Code Here
let selectd;

// If chosen === 1
// ('Osama');
// 39;
// ('Available');
// ('CSS');
if (chosen === 1) {
  [selectd] = myFriends;
}

// If chosen === 2
// ('Ahmed');
// 25;
// ('Not Available');
// ('Django');
if (chosen === 2) {
  [, selectd] = myFriends;
}

// If chosen === 3
// ('Sayed');
// 33;
// ('Available');
// ('Laravel');
if (chosen === 3) {
  [, , selectd] = myFriends;
}

let {
  title,
  age,
  available,
  skills: [, last]
} = selectd;

console.log(title);
console.log(age);
console.log(available ? 'Available' : 'Not Available');
console.log(last);
