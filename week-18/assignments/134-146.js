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
