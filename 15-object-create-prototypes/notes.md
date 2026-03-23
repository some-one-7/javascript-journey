# Day 15 (Alternative) - Object.create() & Prototypes

## 1. What is Object.create()?

Object.create() is used to create a new object using an existing object as a prototype.

### Syntax:
Object.create(prototypeObject)

### Example:
const person = {
  greet() {
    console.log("Hello");
  }
};

const user = Object.create(person);
user.name = "Rahul";

user.greet(); // inherited

---

## 2. What is Prototype?

Every JavaScript object has a hidden property called [[Prototype]].

It points to another object.

---

## 3. Prototype Chain

When we access a property:

JS searches in this order:

user → parent → Object → null

### Example:
user.greet()

JS checks:
- user? ❌
- person? ✅

---

## 4. Inheritance using Object.create()

We can inherit properties and methods.

### Example:
const animal = { eats: true };
const dog = Object.create(animal);

dog.barks = true;

---

## 5. Method Sharing

Methods defined in parent can be used by child.

### Example:
const car = {
  start() {
    console.log("Car started");
  }
};

const electricCar = Object.create(car);
electricCar.start();

---

## 6. Overriding Properties

Child can override parent properties.

### Example:
const human = { type: "Mammal" };
const student = Object.create(human);

student.type = "Student";

---

## 7. hasOwnProperty()

Checks if property belongs to object itself.

### Example:
student.hasOwnProperty("type"); // true

---

## 8. Key Concepts

- Object.create creates inheritance
- Prototype chain helps JS find properties
- Parent methods are reused
- Cleaner and memory efficient

---

## Final Understanding

"Objects can inherit from other objects in JavaScript using prototypes"
