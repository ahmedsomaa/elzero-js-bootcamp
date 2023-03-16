// Assignemnt 1
let ip = '2001:db8:3333:4444:5555:6666:7777:8888';
let ipRe = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;

console.log(ipRe.test(ip)); // true

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let specialNames = 'Os10O OsO Os100O Osa100O Os1000 Os100m';
let specialNamesRe = /Os\d*O/gi;
console.log(specialNames.match(specialNamesRe));

// Output
// ['Os10O', 'OsO', 'Os100O']

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
let phone = '+(995)-123 (4567)';
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;

console.log(phoneRe.test(phone)); // true

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// http
// s -> zero or one
// ://
// (?:[-\w]+\.)? -> one of eithe (wordcharacter or dash) one or more times followed by a dot for example: www.
// ([-\w]+) -> one of (wordcharacter or -) one or more times
//  \. -> dot
// \w+ -> wordcharcater one or more times
// (?:\.\w+)? -> fot followed by a wordcharacter one or more times
// /
// ?.* -> any character except new line 0 or more times
// i -> ignore case
// use tools like this to visualize a regex pattern:
// https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24
// https://regexper.com/
// https://regexr.com/

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
let date1 = '25/10/1982';
let date2 = '25 - 10 - 1982';
let date3 = '25 10 1982';
let date4 = '25 10 82';

re = /\d{2}\/*\s*-*\s*\d{2}\/*\s*-*\s*\d{2,4}/gi; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
