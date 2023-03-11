// Assignment 1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , , e] = myNumbers;

console.log(a * e); // 5

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let mySkills = ['HTML', 'CSS', 'JavaScript', ['PHP', 'Python', ['Django', 'Laravel']]];

// Write Your Destructuring Assignment Here
[a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
let arr1 = ['Ahmed', 'Sameh', 'Sayed'];
let arr2 = ['Mohamed', 'Gamal', 'Amir'];
let arr3 = ['Haytham', 'Shady', 'Mahmoud'];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
[[, a, b], , [_c]] = [arr3, arr2, arr1];
console.log(`My Best Friends: ${a}, ${b}, ${_c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
const member = {
  age: 30,
  working: false,
  country: 'Egypt',
  hobbies: ['Reading', 'Swimming', 'Programming']
};

// Write Your Destructuring Assignment Here
let {
  age: _a,
  working: w,
  country: ct,
  hobbies: [h1, , h3]
} = member;
console.log(`My Age Is ${_a} And Iam ${w ? '' : 'Not'} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${ct}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

//----------------------------------------------------------------------------------------------------------------------

// Assignemnt 5
const game = {
  title: 'YS',
  developer: 'Falcom',
  releases: {
    'Oath In Felghana': ['USA', 'Japan'],
    'Ark Of Napishtim': {
      US: '20 USD',
      JAP: '10 USD'
    },
    Origin: '30 USD'
  }
};

// Write Your Destructuring Assignment/s Here
let { title: t, developer: de, releases } = game;
let [o, ar, or] = Object.keys(releases);
let [u, j] = Object.values(releases[o]);
let { US: u_price, JAP: j_price } = releases[ar];
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${de} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${ar}`);
// Although I Love Ark Of Napishtim

console.log(`${ar} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${ar} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

//----------------------------------------------------------------------------------------------------------------------

// Assignment 6
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
