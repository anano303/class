class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

const person1 = new Person("Nino", 30, "female");
const person2 = new Person("Nika", 26, "male");

console.log(person1.introduce());
console.log(person2.introduce());

// დავალება 2
class Shape {
  constructor(type) {
    this.type = type;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Type: ${circle.type}, Area: ${circle.calculateArea()}`);
console.log(`Type: ${rectangle.type}, Area: ${rectangle.calculateArea()}`);
