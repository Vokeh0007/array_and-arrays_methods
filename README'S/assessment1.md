# JavaScript Mastery: Arrays & Objects
### 20 Questions

---

## 1. Shallow Copy Pitfall

What is the output of `console.log(objA.score)`?

```javascript
const objA = { score: 10, stats: { rank: 1 } };
const objB = { ...objA }; // spread operator creates a shallow copy
objB.score = 20;
objB.stats.rank = 2;

console.log(objA.score);
```

**Answer:** `10`

> `score` is a primitive — the spread copy is independent. But `stats` is a nested object, so it is still shared by reference.

---

## 2. The `map` Transformation

Write a one-liner using `.map()` to convert `[{id: 1}, {id: 2}]` into `[1, 2]`.

```javascript
const ids = arr.map(obj => obj.id);
```

---

## 3. Missing References

What is the output?

```javascript
const users = [{ name: "Alice" }, { name: "Bob" }];
const bob = users.find(u => u.name === "Bob");
bob.name = "Robert";
console.log(users[1].name);
```

**Answer:** `"Robert"`

> `find()` returns a reference to the original object, so mutating `bob` also mutates the object inside the array.

---

## 4. Set for Uniqueness

Write a function `unique(arr)` that takes `[1, 2, 2, 3, 3, 3]` and returns `[1, 2, 3]` using a `Set`.

```javascript
function unique(arr) {
    return [...new Set(arr)];
}
```

---

## 5. Array Holes

What is the output of `console.log(arr.length)`?

```javascript
const arr = [1, 2, 3];
arr[10] = 11;
console.log(arr.length);
```

**Answer:** `11`

> Setting an index beyond the current length extends the array with empty slots. `length` becomes the highest index + 1.

---

## 6. Object to Array

Which `Object` method turns `{a: 1, b: 2}` into `[["a", 1], ["b", 2]]`?

```javascript
Object.entries(obj);
```

---

## 7. Const Mutation

Does the following code throw an error? Why or why not?

```javascript
const items = [1, 2, 3];
items.push(4);
```

**Answer:** No error.

> `const` prevents reassigning the variable, but does **not** prevent mutating the array's contents. `push()` modifies the existing array in place.

---

## 8. The Filter Logic

What does this return?

```javascript
[10, 20, 30].filter(num => num > 50);
```

**Answer:** `[]` (empty array)

> No elements satisfy the condition, so `filter()` returns an empty array.

---

## 9. Dynamic Keys

Create an object using a variable `category = "fruit"` as the key and `"apple"` as the value in a single object literal.

```javascript
const category = "fruit";
const obj = { [category]: "apple" };
// Result: { fruit: "apple" }
```

---

## 10. Deep Freeze

How do you make an object completely immutable so that even nested properties cannot be changed?

```javascript
Object.freeze(obj);
```

> **Note:** `Object.freeze()` is **shallow** — it freezes the top-level properties. For deep immutability, you need to recursively freeze all nested objects. It:
> - Cannot add new properties
> - Cannot modify existing properties
> - Cannot delete properties

---

## 11. Optional Chaining (`?.`)

Rewrite this safely using `?.` so it doesn't crash if `user` or `address` is missing:

```javascript
// Unsafe:
const zip = user.address.zipcode;

// Safe:
const zip = user?.address?.zipcode;
```

---

## 12. Reduce to Sum

Use `.reduce()` to calculate the total price of `[{p: 10}, {p: 20}, {p: 30}]`.

```javascript
const total = arr.reduce((sum, item) => sum + item.p, 0);
// Result: 60
```

---

## 13. Truth Table — AND, OR, NOT

| x | y | x AND y | x OR y | NOT x |
|---|---|---------|--------|-------|
| 1 | 0 |    0    |   1    |   0   |
| 0 | 1 |    0    |   1    |   1   |
| 0 | 0 |    0    |   0    |   1   |
| 1 | 1 |    1    |   1    |   0   |

---

## 13. Comparison Trap

What is the output of `[] == []` and `[] === []`?

```javascript
console.log([] == []);  // false
console.log([] === []); // false
```

**Answer:** Both are `false`.

> Arrays are objects and are compared **by reference**, not by content. Each `[]` is a new object in memory.

---

## 14. Removing Properties

Write code to remove the `password` property from `const user = {id: 1, password: "123"}` **without mutating** the original object.

```javascript
const { password, ...safeUser } = user;
// safeUser = { id: 1 }
// original user is unchanged
```

---

## 15. Sorting Numbers

What is wrong with `[1, 10, 2, 20].sort()`? How do you fix it to sort numerically?

```javascript
// Wrong — sorts lexicographically (as strings):
[1, 10, 2, 20].sort(); // [1, 10, 2, 20]

// Correct — numeric sort:
[1, 10, 2, 20].sort((a, b) => a - b); // [1, 2, 10, 20]
```

---

## 16. The `every` Method

What does `[2, 4, 6].every(num => num % 2 === 0)` return?

**Answer:** `true`

> `.every()` returns `true` only if **all** elements pass the test. All three numbers are even, so it returns `true`.

---

## 17. Merging Objects

Show two ways to merge `obj1` and `obj2` into a new `obj3`.

```javascript
// Method 1: Spread operator
const obj3 = { ...obj1, ...obj2 };

// Method 2: Object.assign()
const obj3 = Object.assign({}, obj1, obj2);
```

---

## 18. Array Intersection

Write a logic snippet to find common elements between `[1, 2, 3]` and `[2, 3, 4]`.

```javascript
const a = [1, 2, 3];
const b = [2, 3, 4];
const intersection = a.filter(item => b.includes(item));
// Result: [2, 3]
```

---

## 19. Object Destructuring

Extract `name` and `age` from `const person = {name: "Joe", age: 30, city: "NY"}` in one line.

```javascript
const { name, age } = person;
```

---

## 20. Flattening Arrays

Which method converts `[[1, 2], [3, 4]]` into `[1, 2, 3, 4]`?

```javascript
[[1, 2], [3, 4]].flat();
// Result: [1, 2, 3, 4]
```
