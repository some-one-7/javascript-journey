// Creating an object

const person = {
    name: "Rishi",
    age: 20,
    city: "Delhi"
};

console.log(person);

// Accessing properties

console.log(person.name);
console.log(person["age"]);

// Modifying Object
const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2020
};

// add property
car.color = "black";

// update
car.year = 2022;

// delete
delete car.model;

// Methods in Objects
const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5,3));
console.log(calculator.multiply(4,6));

console.log(car);
