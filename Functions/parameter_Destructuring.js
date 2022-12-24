// parameter destructuring 

const person = {
    firstName : "Harshit",
    gender : "Male",
    age : 50
};

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// printDetails(person);

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);


