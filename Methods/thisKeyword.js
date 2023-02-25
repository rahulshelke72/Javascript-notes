// Methods 
// functions inside objects 

function personalInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age} `);
}

const person1 = {
    firstName : "Harshit",
    age : 31,
    about : personalInfo
}

const person2 = {
    firstName : "Ajay",
    age : 21,
    about : personalInfo
}
const person3 = {
    firstName : "Bhagyesh",
    age : 22,
    about : personalInfo
}

person1.about();
person2.about();

// Methods 
// functions inside objects 

function personalInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age} `);
}

const person1 = {
    firstName : "Harshit",
    age : 31,
    about : personalInfo
}

const person2 = {
    firstName : "Ajay",
    age : 21,
    about : personalInfo
}
const person3 = {
    firstName : "Bhagyesh",
    age : 22,
    about : personalInfo
}

person1.about();
person2.about();
person3.about(); 
