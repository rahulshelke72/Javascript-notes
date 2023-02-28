// function (that function create object)
// 2.) add key value pair 
// 3.) It return object 

function createUser(firstName , lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName  = lastName;
    user.email  = email;
    user.age = age;
    user.address = address;  
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}

const user1 = createUser("Vishal","Bond","aasds@gmail.com",5,"Mumbai");
console.log(user1);
const about = user1.about();
const is18  = user1.is18();
console.log(about);
console.log(is18);
