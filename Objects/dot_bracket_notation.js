// Difference between dot and bracket notation 

key = "email";

const person = {
    name : "Rahul",
    age : 22,
    "persons hobbies" : ["Music","Cricket","Cooking","Gym"]
    
}

// console.log(person["persons hobbies"]);

person[key] = "rahulshelke@gmail.com";

console.log(person);

