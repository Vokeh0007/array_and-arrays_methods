# JavaScript Assessment

## Instructions

- Answer all questions.
- This assessment covers **Arrays** and **Objects** in JavaScript.
- Write clear and complete answers for coding questions.

---

## Part 1 — Multiple Choice Questions

**1. Which of the following correctly creates an array?**

- A) `let arr = {}`
- B) `let arr = []` ✓
- C) `let arr = ()`
- D) `let arr = <>`

---

**2. Arrays in JavaScript start indexing from:**

- A) `0` ✓
- B) `1`
- C) `-1`
- D) `10`

---

**3. What will this code output?**

```javascript
const arr = [10, 20, 30];
console.log(arr[0]);
```

- A) `10` ✓
- B) `20`
- C) `30`
- D) `undefined`

---

**4. Which method adds an element to the end of an array?**

- A) `push()` ✓
- B) `pop()`
- C) `shift()`
- D) `unshift()`

---

**5. Which method removes the first element of an array?**

- A) `pop()`
- B) `shift()` ✓
- C) `splice()`
- D) `slice()`

---

**6. What will this output?**

```javascript
const numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers);
```

- A) `[1, 2, 3, 0]`
- B) `[0, 1, 2, 3]` ✓
- C) `[1, 2, 3]`
- D) `error`

---

**7. What does `.length` return?**

- A) Number of elements in an array ✓
- B) Last element
- C) Array type
- D) Memory size

---

**8. Which statement about objects is correct?**

- A) Objects store key-value pairs ✓
- B) Objects store only numbers
- C) Objects store only strings
- D) Objects cannot store arrays

---

**9. How do you access the property `name` in this object?**

```javascript
const user = { name: "John" };
```

- A) `user.name`
- B) `user["name"]`
- C) Both A and B ✓
- D) `user(name)`

---

**10. What will this output?**

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj));
```

- A) `[1, 2]`
- B) `["a", "b"]` ✓
- C) `{a, b}`
- D) `error`

---

**11. What will this output?**

```javascript
const arr = [1, 2, 3];
console.log(arr.includes(2));
```

- A) `true` ✓
- B) `false`
- C) `undefined`
- D) `error`

---

**12. What will this output?**

```javascript
const arr = [5, 10, 15];
console.log(arr.indexOf(10));
```

- A) `1` ✓
- B) `2`
- C) `0`
- D) `-1`

---

**13. What does `.slice()` do?**

- A) Removes items permanently
- B) Copies part of an array ✓
- C) Adds items
- D) Reverses array

---

**14. What does `.splice()` do?**

- A) Modifies array by adding/removing elements ✓
- B) Copies array
- C) Finds elements
- D) Sorts array

---

**15. What will this output?**

```javascript
const arr = [1, 2];
const newArr = arr.concat([3, 4]);
console.log(newArr);
```

- A) `[1, 2, 3, 4]` ✓
- B) `[3, 4]`
- C) `[1, 2]`
- D) `error`

---

## Part 2 — Predict the Output

For each question, write what the code will output.

**16.**
```javascript
const arr = [1, 2, 3];
arr.pop();
console.log(arr);
```

**17.**
```javascript
const arr = [10, 20, 30];
console.log(arr.length);
```

**18.**
```javascript
const obj = { name: "Kevin", age: 25 };
delete obj.age;
console.log(obj);
```

**19.**
```javascript
const arr = ["a", "b", "c"];
console.log(arr[5]);
```

**20.**
```javascript
const arr = [1, 2, 3];
arr[5] = 10;
console.log(arr.length);
```

**21.**
```javascript
const obj = { x: 10 };
obj.y = 20;
console.log(obj);
```

**22.**
```javascript
const arr = [1, 2, 3];
const result = arr.slice(1);
console.log(result);
```

**23.**
```javascript
const arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr);
```

**24.**
```javascript
const user = { name: "Anna" };
console.log("age" in user);
```

**25.**
```javascript
const arr = [1, 2, 3];
arr.shift();
console.log(arr);
```

---

## Part 3 — Coding Questions

**26.** Create an array containing 5 numbers.

**27.** Write code to add an element to the end of an array.

**28.** Write code to remove the first element of an array.

**29.** Write code to loop through an array and print each value.

**30.** Create an object called `student` with the properties: `name`, `age`, `course`.

**31.** Write code to add a new property `grade` to an object.

**32.** Create an array of 3 objects representing students. Each object should contain `name` and `age`.

**33.** Write code to print the name of the second student from the array.

**34.** Write a function that returns the sum of numbers in an array.

**35.** Write code to check if an object has a property called `email`.
