// Day 8 - JavaScript Array Methods

let fruits = ["Apple", "Banana", "Mango"];

// shift() → removes first element
fruits.shift();
console.log("After shift:", fruits);

// unshift() → adds element at beginning
fruits.unshift("Orange");
console.log("After unshift:", fruits);

// includes() → checks if value exists
console.log("Includes Mango:", fruits.includes("Mango"));

// indexOf() → returns position of element
console.log("Index of Banana:", fruits.indexOf("Banana"));

// slice() → returns a portion of array
let newFruits = fruits.slice(0, 2);
console.log("Slice result:", newFruits);

// concat() → joins two arrays
let vegetables = ["Potato", "Tomato"];
let food = fruits.concat(vegetables);
console.log("Concat:", food);

// join() → converts array to string
console.log("Join:", fruits.join(" - "));

// reverse() → reverses array
console.log("Reverse:", fruits.reverse());

// sort() → sorts array
let numbers = [5, 2, 8, 1];
numbers.sort();
console.log("Sorted numbers:", numbers);
