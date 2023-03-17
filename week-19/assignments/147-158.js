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

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size = 'Unknown') {
    super(name, serial, price);
    this.size = size;
  }

  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet('iPad', 100200300, 1500, 12.9);
let TabletTwo = new Tablet('Nokia', 350450650, 800, 10.5);
let TabletThree = new Tablet('LG', 250450650, 650);


console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown