// Assignment 1
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return 'Car Is Running Now';
  }

  stop() {
    return 'Car Is Stopped';
  }
}

const car1 = new Car('MG', '2022', 420000);
const car2 = new Car('Renault', '2010', 90000);
const car3 = new Car('Mercedes', '2023', 500000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());
