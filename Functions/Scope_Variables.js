// block scope vs function scope 

// let and const are block scope 

// var is function scope 

// if(true){
//     var FirstName = "harshit";
//     console.log(FirstName);
// }
// console.log(FirstName);


// Therefore firstName is not accesible outside if statement

function myFunc(){
    if(true){
        let firstName = "Rahul";
        console.log(firstName);
    }
    console.log(firstName);
}
myFunc();