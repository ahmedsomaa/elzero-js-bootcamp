// display prompt
const value = prompt('Print Number From – To', '5-10');

// convert user value to range
const range = value
  .split('-')
  .map((n) => +n)
  .sort((a, b) => a - b);

// print numbers between range
for (let index = range[0]; index <= range[1]; index++) {
  console.log(index);
}
