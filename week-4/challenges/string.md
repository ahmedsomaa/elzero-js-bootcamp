# String Challenge

```javascript
let a = 'Elzero Web School';

// Include this Methods in your solution [slice, charAt]
console.log(); // Zero

// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(); // ['Elzero']

// Use only "substr" method + template literals in your solution
console.log(); // Elzero School

// Solution must be dynamic and string may change
console.log(); // eLZERO WEB SCHOOl
```

## Solution

```javascript
// 1
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// 2
console.log(
    a
        .charAt(a.length - 4)
        .toUpperCase()
        .repeat(8)
);

// 3
console.log(`${a.substr(0, 6)} ${a.substr(a.length - 6, 6)}`);

// 4
console.log(a[0].toLowerCase() + a.substr(1, a.length - 2).toUpperCase() + a[a.length - 1].toLowerCase());
```
