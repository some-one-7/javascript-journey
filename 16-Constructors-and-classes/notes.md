# Day 16 - Constructor Functions & Classes

## 1. Constructor Function

A constructor function is used to create multiple objects with the same structure.

### Example:
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Rahul", 20);

---

## 2. What does 'new' keyword do?

When we use 'new':
1. Creates an empty object {}
2. Binds 'this' to that object
3. Links object to prototype
4. Returns the object

---

## 3. Prototype

Instead of creating functions again and again for each object, we use prototype.

### Example:
User.prototype.greet = function() {
  console.log("Hello " + this.name);
};

---

## 4. ES6 Classes

Modern way to create objects.

### Example:
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showDetails() {
    console.log(this.name + " costs ₹" + this.price);
  }
}

---

## 5. Inheritance (Class)

Using 'extends' keyword

### Example:
class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
}

---

## 6. Key Differences

Constructor Function:
- Old syntax
- Uses function keyword

Class:
- Modern syntax
- Cleaner and easier to read

---

## 7. Key Concepts

- 'this' refers to current object
- 'new' creates object
- Prototype saves memory
- Classes are syntactic sugar over prototypes

---

## Final Understanding

"JavaScript uses prototypes behind the scenes, even in classes"
