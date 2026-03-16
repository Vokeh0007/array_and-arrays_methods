# JavaScript Sets

## 1. What is a Set?

A **Set** is a built-in JavaScript object that allows you to store **unique values** of any type.

Key characteristics:

```
● Values are unique (no duplicates allowed)
```
```
● Maintains insertion order
```
```
● Can store any data type
```
```
● Provides useful methods for adding, deleting, and checking values
```
Think of a **Set like a collection where duplicates are automatically removed**.

Example:

let numbers = new Set([1, 2, 3, 3, 4, 4]);

console.log(numbers);

Output:

Set(4) {1, 2, 3, 4}

Duplicates were removed automatically.

# 2. Creating a Set

There are multiple ways to create a Set.

### Empty Set


let mySet = new Set();

### Set with Values

let fruits = new Set(["apple", "banana", "mango"]);

### Set from an Array

let numbers = [1, 2, 3, 3, 4];

let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);

# 3. Adding Values to a Set

Use the **add()** method.

let colors = new Set();

colors.add("red");

colors.add("blue");

colors.add("green");

console.log(colors);

Adding duplicates does nothing.

colors.add("red");

console.log(colors);

Output still:

Set(3) {"red", "blue", "green"}


# 4. Checking Values in a Set

Use **has()**

let fruits = new Set(["apple", "banana", "orange"]);

console.log(fruits.has("banana"));

console.log(fruits.has("grapes"));

Output

true

false

# 5. Removing Values from a Set

Use **delete()**

let numbers = new Set([1, 2, 3, 4]);

numbers.delete(3);

console.log(numbers);

Output

Set(3) {1,2,4}

# 6. Clearing a Set

Use **clear()**

let letters = new Set(["a", "b", "c"]);


letters.clear();

console.log(letters);

Output

Set(0) {}

# 7. Getting the Size of a Set

Use the **size property**

let items = new Set(["pen", "book", "bag"]);

console.log(items.size);

Output

3

# 8. Looping Through a Set

### Using for...of

let fruits = new Set(["apple", "banana", "mango"]);

for (let fruit of fruits) {

console.log(fruit);

}

### Using forEach()


let numbers = new Set([10, 20, 30]);

numbers.forEach(num => {

console.log(num);

});

# 9. Converting Set to Array

Sometimes you want to remove duplicates from an array.

### Using Spread Operator

let numbers = [1,2,3,3,4,4,5];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

Output

[1,2,3,4,5]

Very common real-world use.

# 10. Practical Example

Remove duplicate emails from a list.

let emails = [

"user1@gmail.com",

"user2@gmail.com",

"user1@gmail.com",

"user3@gmail.com"

];


let uniqueEmails = [...new Set(emails)];

console.log(uniqueEmails);

# Coding Quiz Section

## Quiz 1

What will be the output?

let numbers = new Set([1,2,3,3,4]);

console.log(numbers.size);

#### A. 3

#### B. 4

#### C. 5

D. Error

## Quiz 2

What will this print?

let set = new Set();

set.add("apple");

set.add("apple");

set.add("banana");

console.log(set);


## Quiz 3

Complete the code to check if "Kenya" exists.

let countries = new Set(["Kenya","Uganda","Tanzania"]);

console.log( __________ );

## Quiz 4

Convert this array to **unique values**.

let numbers = [5,5,6,7,7,8];

Expected Output

[5,6,7,8]

## Quiz 5

What will be the output?

let set = new Set([10,20,30]);

set.delete(20);

console.log(set);

# Coding Challenges

### Challenge 1 — Remove Duplicate Names

let names = ["John","Jane","John","Mary","Jane"];


Task: Return

["John","Jane","Mary"]

### Challenge 2 — Find Unique Numbers

let nums = [1,2,2,3,4,4,5];

Return only unique values.

### Challenge 3 — Count Unique Words

let words = ["apple","banana","apple","orange","banana"];

Find how many **unique words** exist.

Expected Output

3

# Advanced Example

Using Set to find **common values between arrays**

let arr1 = [1,2,3,4];

let arr2 = [3,4,5,6];

let common = arr1.filter(num => new Set(arr2).has(num));

console.log(common);

Output

[3,4]


# Summary

Sets are useful when:

```
● Removing duplicates
```
```
● Storing unique values
```
```
● Checking existence quickly
```
```
● Performing mathematical set operations
```
Common methods:

```
Method Purpose
```
```
add() Add value
```
```
delete() Remove value
```
```
has() Check
existence
```
```
clear() Remove all
```
```
size Count values
```

# JSON in JavaScript

## 1. What is JSON?

**JSON** stands for **JavaScript Object Notation**.

It is a **lightweight data format used to store and exchange data**.

Most commonly used in:

```
● APIs
```
```
● Databases
```
```
● Configuration files
```
```
● Sending data between frontend and backend
```
Example JSON:

{

"name": "Kevin",

"age": 25,

"city": "Nairobi"

}

JSON looks very similar to a **JavaScript object** , but it is actually **just text (a string format)**.

# 2. JSON vs JavaScript Object

### JavaScript Object

let user = {

name: "Kevin",

age: 25,

city: "Nairobi"

};


### JSON Format

#### {

"name": "Kevin",

"age": 25,

"city": "Nairobi"

}

Important differences:

```
JavaScript Object JSON
```
```
Keys can be without
quotes
```
```
Keys must be in double
quotes
```
```
Can contain functions Cannot contain functions
```
```
Can contain undefined Cannot contain undefined
```
```
Is a real JS object Is a text format
```
# 3. Why JSON is Important

JSON is used for **communication between systems**.

Example:

Frontend → Backend → Database

Example API response:

{

"id": 1,

"name": "Laptop",

"price": 800

}

JavaScript receives it and converts it to an object.


# 4. JSON.stringify()

Converts a **JavaScript object into JSON string**.

### Example

let student = {

name: "John",

age: 20,

course: "Web Development"

};

let jsonData = JSON.stringify(student);

console.log(jsonData);

Output

{"name":"John","age":20,"course":"Web Development"}

Notice it becomes **a string**.

Check type:

console.log(typeof jsonData);

Output

string

# 5. JSON.parse()

Converts **JSON string → JavaScript object**.

Example:

let jsonData = '{"name":"John","age":20}';


let obj = JSON.parse(jsonData);

console.log(obj.name);

Output

John

Check type:

console.log(typeof obj);

Output

object

# 6. Real World Example (API)

When calling an API:

fetch("https://api.example.com/users")

.then(response => response.json())

.then(data => console.log(data));

Here:

JSON → converted into JavaScript object


# 7. JSON Data Types

Allowed JSON data types:

```
● String
```
```
● Number
```
```
● Boolean
```
```
● Array
```
```
● Object
```
```
● null
```
Example:

{

"name": "Kevin",

"age": 30,

"isStudent": false,

"skills": ["HTML", "CSS", "JavaScript"],

"address": {

"city": "Nairobi",

"country": "Kenya"

}

}

# 8. Nested JSON

JSON can contain objects inside objects.

Example:

{

"student": {

"name": "Ian",


"address": {

"city": "Eldoret",

"country": "Kenya"

}

}

}

Access in JavaScript:

let data = {

student: {

name: "Ian",

address: {

city: "Eldoret",

country: "Kenya"

}

}

};

console.log(data.student.address.city);

Output

Eldoret

# 9. JSON Arrays

JSON can also store arrays.

Example:

{

"students": [

{"name": "John"},

{"name": "Jane"},

{"name": "Mary"}


#### ]

#### }

JavaScript example:

let data = {

students: [

{name: "John"},

{name: "Jane"},

{name: "Mary"}

]

};

console.log(data.students[1].name);

Output

Jane

# 10. Invalid JSON Example

This will cause errors.

❌ Incorrect JSON

{

name: "Kevin",

age: 25

}

Keys must be in quotes.

✔ Correct JSON

{

"name": "Kevin",


"age": 25

}

# Coding Quiz

## Quiz 1

What will this return?

let obj = {

name: "Kevin",

age: 30

};

let json = JSON.stringify(obj);

console.log(typeof json);

A. object
B. string
C. number
D. undefined

## Quiz 2

What will be printed?

let json = '{"city":"Nairobi","country":"Kenya"}';

let data = JSON.parse(json);

console.log(data.city);


## Quiz 3

Fix the JSON error.

{

name: "John",

age: 22

}

## Quiz 4

Convert this object to JSON.

let product = {

name: "Phone",

price: 500

};

## Quiz 5

Convert this JSON into a JavaScript object.

let json = '{"name":"Mary","age":24}';

# Coding Challenges

## Challenge 1

Convert the object to JSON.

let user = {

username: "admin",

password: "12345"

};


## Challenge 2

Parse this JSON and print the country.

let json = '{"name":"Kevin","country":"Kenya"}';

## Challenge 3

Access "CSS" from this data.

let json = `{

"skills": ["HTML","CSS","JavaScript"]

}`;

# Advanced Example (Very Common in Web

# Apps)

Saving data in **localStorage**

let user = {

name: "Kevin",

age: 25

};

localStorage.setItem("user", JSON.stringify(user));

Getting the data back:

let storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);


# Summary

Key JSON methods in JavaScript:

```
Method Purpose
```
```
JSON.stringify() Convert object → JSON string
```
```
JSON.parse() Convert JSON string → object
```
JSON is used in:

```
● APIs
```
```
● Databases
```
```
● Web applications
```
```
● Configuration files
```

# Dates in JavaScript

## 1. What is a Date in JavaScript?

JavaScript provides the **Date object** to work with:

```
● Dates
```
```
● Times
```
```
● Timestamps
```
It is used in many real-world cases:

```
● Timestamps in databases
```
```
● Scheduling systems
```
```
● Logging events
```
```
● Countdown timers
```
```
● Booking systems
```
Example:

let today = new Date();

console.log(today);

Example Output

Tue Mar 10 2026 10:25:30 GMT+0300

# 2. Creating a Date


### Current Date and Time

let now = new Date();

console.log(now);

### Specific Date

let date = new Date("2026-03-10");

console.log(date);

### Date with Year, Month, Day

let date = new Date(2026, 2, 10);

console.log(date);

Important:

Months start at **0**

```
Month Value
```
```
January 0
```
```
February 1
```
```
March 2
```
So:

2 = March

### Date with Full Time

let date = new Date(2026, 2, 10, 14, 30, 0);

console.log(date);


This represents:

10 March 2026 14:30:00

# 3. Getting Parts of a Date

JavaScript provides methods to extract parts of a date.

Example:

let today = new Date();

```
Method Example
```
```
getFullYear() today.getFullYear()
```
```
getMonth() today.getMonth()
```
```
getDate() today.getDate()
```
```
getDay() today.getDay()
```
```
getHours() today.getHours()
```
```
getMinutes() today.getMinutes()
```
```
getSeconds(
)
```
```
today.getSeconds(
)
```
Example:

let today = new Date();

console.log(today.getFullYear());

console.log(today.getMonth());

console.log(today.getDate());

# 4. Getting the Day of the Week


getDay() returns numbers **0–6**

```
Number Day
```
```
0 Sunday
```
```
1 Monday
```
```
2 Tuesday
```
```
3 Wednesda
y
```
```
4 Thursday
```
```
5 Friday
```
```
6 Saturday
```
Example:

let today = new Date();

console.log(today.getDay());

# 5. Setting Date Values

You can also **modify a date**.

Example:

let date = new Date();

date.setFullYear(2030);

console.log(date);

Other setters:

```
Method
```

```
setFullYear()
```
```
setMonth()
```
```
setDate()
```
```
setHours()
```
```
setMinutes()
```
Example:

let date = new Date();

date.setMonth(11);

console.log(date);

This sets the month to **December**.

# 6. Date Timestamp

A timestamp is the **number of milliseconds since Jan 1, 1970**.

Example:

let timestamp = Date.now();

console.log(timestamp);

Example Output

1773458200000

# 7. Formatting Dates


Simple formatting example:

let today = new Date();

let formatted = today.getDate() + "/" + (today.getMonth() + 1) + "/" +

today.getFullYear();

console.log(formatted);

Output Example

10/3/2026

Notice:

getMonth() + 1

because months start at **0**.

# 8. Date Difference

Calculate difference between dates.

Example:

let start = new Date("2026-03-01");

let end = new Date("2026-03-10");

let diff = end - start;

console.log(diff);

Output is **milliseconds**.

Convert to days:

let days = diff / (1000 * 60 * 60 * 24);


console.log(days);

Output

9

# 9. Real World Example (Age Calculator)

let birthYear = 2000;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age);

# Coding Quiz

## Quiz 1

What will this output?

let date = new Date(2026, 0, 1);

console.log(date.getMonth());

#### A. 0

#### B. 1

C. January
D. Error


## Quiz 2

What will this print?

let today = new Date();

console.log(today.getFullYear());

## Quiz 3

Fix the code.

let date = new Date();

console.log(date.getmonth());

## Quiz 4

Create a date for:

25 December 2030

## Quiz 5

What will this output?

console.log(Date.now());

# Coding Challenges

## Challenge 1 — Show Current Time


Print current:

HH:MM:SS

Example Output

14:32:10

## Challenge 2 — Show Today's Date

Format:

DD/MM/YYYY

Example

10/03/2026

## Challenge 3 — Days Between Dates

Calculate days between:

2026-03-01

2026-03-10

# Advanced Example (Countdown Timer)

let eventDate = new Date("2026-12-25");

let today = new Date();

let diff = eventDate - today;

let days = Math.floor(diff / (1000 * 60 * 60 * 24));


console.log(days + " days remaining");

Example Output

290 days remaining

# Summary

Important Date concepts:

```
Feature Example
```
```
Current date new Date()
```
```
Specific date new Date("2026-03-10")
```
```
Timestamp Date.now()
```
```
Get values getFullYear(), getMonth()
```
```
Set values setFullYear(), setMonth()
```
Dates are used in:

```
● login systems
```
```
● booking systems
```
```
● analytics
```
```
● timers
```
```
● event tracking
```

# JavaScript Classes

## 1. What is a Class?

A **Class** in JavaScript is a **blueprint for creating objects**.

It defines:

```
● properties (data)
```
```
● methods (functions)
```
Classes help organize code using **Object-Oriented Programming (OOP)**.

Example idea:

Class → Blueprint

Object → Instance created from the blueprint

Example:

Blueprint: **Car**

Objects:

Car1

Car2

Car3

Each object can have different values but share the same structure.

# 2. Creating a Class

Basic syntax:

class Person {


#### }

Example:

class Person {

constructor(name, age) {

this.name = name;

this.age = age;

}

}

Explanation:

```
Keyword Meaning
```
```
class Defines a class
```
```
constructor Special function called when object is
created
```
```
this Refers to the current object
```
# 3. Creating Objects from a Class

Objects are created using **new**.

Example:

class Person {

constructor(name, age) {

this.name = name;

this.age = age;

}

}

let person1 = new Person("Kevin", 30);

let person2 = new Person("Jane", 25);


console.log(person1);

console.log(person2);

Output:

Person { name: "Kevin", age: 30 }

Person { name: "Jane", age: 25 }

# 4. Adding Methods to a Class

Methods are functions inside classes.

Example:

class Person {

constructor(name, age) {

this.name = name;

this.age = age;

}

greet() {

console.log("Hello my name is " + this.name);

}

}

let p1 = new Person("Kevin", 30);

p1.greet();

Output:

Hello my name is Kevin


# 5. Multiple Methods in a Class

Example:

class Calculator {

add(a, b) {

return a + b;

}

multiply(a, b) {

return a * b;

}

#### }

let calc = new Calculator();

console.log(calc.add(5,3));

console.log(calc.multiply(4,6));

Output

8

24

# 6. Class Inheritance

Inheritance allows one class to **inherit properties and methods from another class**.

Example:

Parent class:

class Animal {

speak() {

console.log("Animal makes sound");


#### }

#### }

Child class:

class Dog extends Animal {

#### }

Usage:

let dog = new Dog();

dog.speak();

Output:

Animal makes sound

# 7. Using super()

super() calls the **parent class constructor**.

Example:

class Animal {

constructor(name) {

this.name = name;

}

}

class Dog extends Animal {

constructor(name, breed) {

super(name);

this.breed = breed;

}


#### }

let d = new Dog("Max","German Shepherd");

console.log(d);

Output

Dog { name: "Max", breed: "German Shepherd" }

# 8. Static Methods

Static methods belong to the **class itself** , not the object.

Example:

class MathHelper {

static square(num) {

return num * num;

}

#### }

console.log(MathHelper.square(5));

Output

25

Cannot be called using objects.

let m = new MathHelper();

m.square(5) ❌


# 9. Getters and Setters

They control how properties are **read and updated**.

Example:

class User {

constructor(name) {

this._name = name;

}

get name() {

return this._name;

}

set name(value) {

this._name = value;

}

#### }

let user = new User("Kevin");

console.log(user.name);

user.name = "John";

console.log(user.name);

Output

Kevin

John

# Coding Quiz


## Quiz 1

What will this output?

class Car {

constructor(brand) {

this.brand = brand;

}

}

let c = new Car("Toyota");

console.log(c.brand);

## Quiz 2

What will this print?

class Test {

sayHello() {

console.log("Hello");

}

}

let t = new Test();

t.sayHello();

## Quiz 3

Fix the error.

class Person {

constructor(name)

this.name = name;

}


## Quiz 4

Create an object from this class.

class Student {

constructor(name, course) {

this.name = name;

this.course = course;

}

}

# Coding Challenges

## Challenge 1 — Create a Car Class

Create a class with:

brand

model

year

Add a method:

getDetails()

Expected output:

Toyota Corolla 2024

## Challenge 2 — Bank Account


Create a class:

BankAccount

Properties:

owner

balance

Methods:

deposit(amount)

withdraw(amount)

## Challenge 3 — Rectangle Area

Create class:

Rectangle

Properties:

width

height

Method:

area()

Example output:

Area = 50

# Real World Example


User system:

class User {

constructor(username, email) {

this.username = username;

this.email = email;

}

login() {

console.log(this.username + " logged in");

}

#### }

let user1 = new User("kevin123","kevin@email.com");

user1.login();

Output

kevin123 logged in

# Summary

Important concepts in Classes:

```
Concept Purpose
```
```
class Blueprint for objects
```
```
constructor Initialize properties
```
```
methods Functions inside class
```
```
extends Inheritance
```
```
super() Call parent constructor
```

static Method for class only

get/set Control property
access



