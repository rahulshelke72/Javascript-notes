// Objects refrence type
// arrays are good but not sufficient 
// for real world data 
// Objects stores key value pairs
// objects don't have index

// how to create objects 
// const person = {name:"Rahul" , age:22};

const person = {
    name : "Rahul",
    age : 22,
    hobbies : ["Music","Cricket","Cooking","Gym"]
}
console.log(person);
console.log(typeof person);

// how to access data from objects
// console.log(person.name);
// console.log(person.age);
console.log(person.hobbies);


// how to add key value pair to objects 
// person.gender = "male";

person["gender"] = "male";
console.log(person);


