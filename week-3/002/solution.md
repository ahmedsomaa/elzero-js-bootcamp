```javascript
let num = 3;

// Solution One
console.log(num + num); // 6  num = 3

// Solution Two
console.log(num * num - num); // 6 num = 3

// Soultion Three
console.log(num++ + --num) // 6 num = 3

// Soultion Four
console.log(num + +true + --num);  // 6 num = 2

// Solution Five
console.log(num ** num + num++); // 6 num = 3

// Solution Six
console.log(num++ * num-- / --num); // 6 num = 2
```