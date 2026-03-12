// Question 1

let student = {
  name: "Ian",
  age: 22,
  course: "Web Development",
};
let jsonString = JSON.stringify(student);

console.log(jsonString);


// Question 2

let jsonData = '{"name":"Kevin","country":"Kenya"}';
let obj = JSON.parse(jsonData);

console.log(obj.country); 


// Question 3

let data = `{
  "user": {
    "name": "John",
    "address": {
      "city": "Eldoret",
      "country": "Kenya"
    }
  }
}`;

console.log(JSON.parse(data).user.address.city);


// Question 4

let json = `{
  "students": [
    {"name":"John"},
    {"name":"Jane"},
    {"name":"Mary"}
  ]
}`;

let obj2 = JSON.parse(json);

console.log(obj2.students[1].name); 


//Question 5

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  }
}

const person = new Person("Vincent", 18);
person.introduce();

console.log(JSON.stringify(person));

// Question 6
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  carInfo() {
    console.log(`${this.brand} ${this.model} ${this.year}`);
  }
}
new Car("Toyota", "Corolla", 2024).carInfo(); 

// Question 7
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    console.log(`Area = ${this.width * this.height}`);
  }
}
new Rectangle(8, 5).area(); // Area = 40

// Question 8
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {}
new Dog().speak(); // Animal sound

// Question 9
const setA = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(setA); // Set(5) {1,2,3,4,5}

// Question 10
const fruits = new Set();
["apple", "banana", "mango"].forEach((f) => fruits.add(f));
console.log(fruits.has("banana")); // true

// Question 11
let numbers = [5, 6, 6, 7, 8, 8, 9];
let numbersSet = new Set(numbers);
console.log(numbersSet); // Set(5) {5,6,7,8,9}

// Question 12
let colors = new Set(["red", "blue", "green"]);
for (let color of colors) console.log(color);

// Question 13
let now = new Date();
console.log(now);

// Question 14
let d = new Date(2030, 7, 15);
console.log(d.getFullYear(), d.getMonth() + 1, d.getDate()); // 2030 8 15

// Question 15
let t = new Date();
let dString = `${String(t.getDate()).padStart(2, "0")}/${String(
  t.getMonth() + 1
).padStart(2, "0")}/${t.getFullYear()}`;
console.log(dString);

// Question 16
let a = new Date("2026-03-01");
let b = new Date("2026-03-10");
let days = Math.round((b - a) / (1000 * 60 * 60 * 24));
console.log(days); // 9

// Question 17
let day = 3;
let name = "";
switch (day) {
  case 1:
    name = "Monday";
    break;
  case 2:
    name = "Tuesday";
    break;
  case 3:
    name = "Wednesday";
    break;
  case 4:
    name = "Thursday";
    break;
  case 5:
    name = "Friday";
    break;
  case 6:
    name = "Saturday";
    break;
  case 7:
    name = "Sunday";
    break;
}
console.log(name); // Wednesday

// Question 18
function calc(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? null : a / b;
  }
}
console.log(calc(5, 3, "+")); // 8

// Question 19
console.log(Math.round(5.6789)); // 6
console.log((5.6789).toFixed(2)); // 5.68

// Question 20
let x = Number("100") + 50;
console.log(x); // 150

// Bonus
class Student {
  constructor(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.registered = new Date().toISOString().slice(0, 10);
  }
}
let registry = new Map();
let ids = new Set();
function addStud(id, name, course) {
  if (ids.has(id)) return;
  ids.add(id);
  registry.set(id, new Student(id, name, course));
}
addStud(101, "Kevin", "JavaScript");
console.log(registry.get(101));

// Question 21
function matchInventories(invA, invB) {
  let merged = new Set([...invA, ...invB]);
  return {
    totalUnique: merged.size,
    isIdentical: JSON.stringify(invA) === JSON.stringify(invB),
  };
}
console.log(matchInventories(["pen", "book"], ["pen", "book"]));

// Question 22
function aggregateScores(arr) {
  let result = {};
  arr.forEach((v) => {
    let k = String(v);
    result[k] = (result[k] || 0) + 1;
  });
  return result;
}
console.log(aggregateScores([10, "10", 20]));

// Question 23
function sanitizeUsernames(users) {
  let set = new Set();
  for (let u of users) {
    let n = u.name.trim();
    if (!n) continue;
    n = n[0].toUpperCase() + n.slice(1).toLowerCase();
    set.add(n);
  }
  return [...set];
}
console.log(
  sanitizeUsernames([
    { id: 1, name: "  alice " },
    { id: 2, name: "alice" },
  ])
); // ["Alice"]

// Question 24
function addDefaultTags(posts, newTag) {
  return posts.map((post) => {
    let s = new Set(post.tags);
    s.add(newTag);
    post.tags = [...s];
    return post;
  });
}
console.log(addDefaultTags([{ title: "JS", tags: ["code"] }], "javascript"));

// Question 25
function buildConfig(userConfig) {
  let defaults = { theme: "light", retries: 3 };
  let cfg = { ...defaults, ...userConfig };
  cfg.themeChars = [...new Set(cfg.theme.split(""))];
  return cfg;
}
console.log(buildConfig({ theme: "dark", retries: 0 }));

// Question 26
function createEventManager() {
  let events = [];
  let unique = new Set();
  return {
    trigger(name) {
      events.push(name);
      unique.add(name);
    },
    getEvents() {
      return [...events];
    },
    getUnique() {
      return [...unique];
    },
  };
}
const em = createEventManager();
em.trigger("click");
em.trigger("hover");
em.trigger("click");
console.log(em.getEvents());

// Question 27
function intersectArrays(arr1, arr2) {
  let s = new Set(arr1);
  return arr2.filter((item) => s.has(item));
}
console.log(intersectArrays(["a", "b", "c"], ["b", "c", "d"]));

// Question 28
function formatCart(cart) {
  let prices = new Set(
    cart.map((item) => {
      if (typeof item === "string") return Number(item);
      if (item && typeof item === "object") return Number(item.price);
      return 0;
    })
  );
  return [...prices].reduce((a, v) => a + (isNaN(v) ? 0 : v), 0);
}
console.log(formatCart(["15.99", { price: 20 }, "15.99"])); // 35.99

// Question 29
function swapCoordinates(point) {
  return [`${point.y},${point.x}`];
}
console.log(swapCoordinates({ x: 10, y: 20 })); // ["20,10"]

// Question 30
function updateRoles(userObj, rolesArray) {
  rolesArray.forEach((r) => userObj.roles.add(r));
  userObj.roles.delete("guest");
  let list = [...userObj.roles];
  return `${userObj.name} has ${list.length} roles: ${list.join(", ")}`;
}
const u = { name: "Kevin", roles: new Set(["guest", "viewer"]) };
console.log(updateRoles(u, ["editor", "admin"]));

