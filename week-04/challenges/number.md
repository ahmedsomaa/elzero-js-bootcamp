# Number Challenge

```javascript
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log();

// Use Variable a + d One Time To Get the Needed Output
console.log(); // 10000

// Get Integer "2" from d Variable with 4 Methods
console.log();
console.log();
console.log();
console.log();

// Use Variables b + d to get these values
console.log(); // 66.67 => String
console.log(); // 67 => Number
```

## Solution

```javascript
// 1
console.log(parseInt(Math.min(a, b, c, d)));

// 2
console.log(Math.pow(a, Math.trunc(d)));

// 3
console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

// 4
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
console.log(Math.round(b) / Math.ceil(d));
```
