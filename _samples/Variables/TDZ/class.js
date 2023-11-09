// const myNissan = new Car("red"); // throws `ReferenceError`
class Car {
  constructor(color) {
    this.color = color;
  }
}
const myNissan = new Car("red");

class MuscleCar extends Car {
  constructor(color, power) {
    super(color);
    this.power = power;
    // super(color); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  }
}

const myCar = new MuscleCar("blue", "300HP");
