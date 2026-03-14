
// looping through object
const phone = {
    brand: "Apple",
    model: "iPhone 14",
    price: 80000
};

for(let key in phone){
    console.log(key + ":", phone[key]);
}

// Counting number of keys

const user = {
    name: "Rishi",
    age: 20,
    city: "Delhi",
    profession: "Student"
};

let count = 0;

for(let key in user){
    count++;
}

console.log("Total properties:", count);

//
