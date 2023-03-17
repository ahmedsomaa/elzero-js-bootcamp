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

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
// Write Your Code Here
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = 'Elzero';
console.log(myStr.addLove()); // I Love Elzero Web School

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
const myObj = {
  username: 'Elzero',
  id: 100,
  score: 1000,
  country: 'Egypt'
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false
  },
  id: {
    enumerable: false
  },
  country: {
    writable: false,
    enumerable: false,
    configurable: false
  }
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
