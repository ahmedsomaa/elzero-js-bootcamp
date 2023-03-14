let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * new Set(n1).size * Math.min(...n2)); //210

// second possible solution
console.log(Math.max(...new Set(n1)) * [...n1, ...n2].length); //210
