# JavaScript Classes

**Last Updated:** 17 Jan, 2026

JavaScript classes (introduced in ES6) provide a structured way to create objects with shared properties and methods. They support inheritance, encapsulation, and modularity, making it easier to write object-oriented code.

---

## Syntax

```javascript
class ClassName {
    constructor() {
        // Initialize properties here
    }

    // Define methods here
    methodName() {
        // Method code
    }
}
```

- The `class` keyword is used to declare a class.
- The `constructor()` method is a special method that is automatically called when an instance of the class is created.
- You can define methods inside the class to provide behaviour for objects created from the class.

---

## Key Features of JavaScript Classes

- **Encapsulation:** Bundles data (properties) and behaviour (methods) together.
- **Constructor Method:** Initializes properties when an object is created.
- **Inheritance:** Allows one class to inherit properties and methods from another.
- **Code Reusability:** Enables the creation of multiple instances with shared functionality.
- **Simplicity & Clarity:** Provides a clear structure for creating and managing objects.

---

## Creating a Simple Class

A basic class that defines properties and methods. This example shows how to create an object with a constructor and method.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let p1 = new Person("Pranjal", 20);
p1.greet();
```

- The `Person` class has a constructor to set `name` and `age`, and a `greet` method to log a greeting message.
- An instance (`p1`) is created with `new`, passing `"Pranjal"` and `20`, then calls `greet` to print the greeting.

---

## Constructor to Initialize Objects

The constructor is used to initialize the properties of the object when an instance is created.

```javascript
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

let myCar = new Car("Toyota", "Corolla", 2021);
myCar.display();
```

- The `Car` class has a constructor to initialize `make`, `model`, and `year`, and a `display` method to log the car details.
- An instance (`myCar`) is created with `new`, passing `"Toyota"`, `"Corolla"`, and `2021`, then calls `display` to print the info.

---

## Inheritance in Classes

Inheritance allows one class to extend another, inheriting its properties and methods while adding or overriding functionality.

```javascript
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }

    displayBattery() {
        console.log(`Battery life: ${this.batteryLife} hours`);
    }
}

let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.displayInfo();
tesla.displayBattery();
```

- `ElectricCar` inherits from `Car`, using `super` to set shared properties and adds `batteryLife` and `displayBattery`.
- An instance (`tesla`) calls both `displayInfo` to show car details and `displayBattery` to show battery life.

---

## Creating Multiple Objects from a Class

Using classes to create multiple objects with the same structure but different data.

```javascript
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

let c1 = new Car("Toyota", "Corolla", 2021);
let c2 = new Car("Honda", "Civic", 2020);

c1.display();
c2.display();
```

- The `Car` class initializes car details and has a `display` method to show them.
- Two `Car` instances (`c1` and `c2`) are created, and `display` is called on both to show their details.

---

## Quiz

**1. Which keyword is used to create a class in JavaScript?**

- A) `object`
- B) `class` ✓
- C) `constructor`
- D) `functionClass`

---

**2. What is the purpose of the `constructor()` method inside a class?**

- A) To delete objects
- B) To inherit another class
- C) To initialize object properties when an instance is created ✓
- D) To stop event propagation

---

**3. Which keyword is used to inherit a class from another class?**

- A) `extends` ✓
- B) `inherits`
- C) `prototype`
- D) `clone`

---

**4. What does `super()` do inside a derived class?**

- A) Deletes parent class properties
- B) Calls the parent class constructor ✓
- C) Stops execution of the child class
- D) Creates multiple instances

---

**5. What will be the output of the following code?**

```javascript
class A {
    constructor(name) { this.name = name; }
    show() { console.log(this.name); }
}

let obj = new A("JS");
obj.show();
```

- A) `Undefined`
- B) `Error`
- C) `JS` ✓
- D) `null`
