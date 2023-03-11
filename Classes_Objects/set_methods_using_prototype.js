
// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//        return 'toon na na na la';
//     }
// };


function createUser(firstName , lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName  = lastName;
    user.email  = email;
    user.age = age;
    user.address = address;  
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

createUser.prototype.sing = function(){
    return 'toon na na na la';
}

const user1 = createUser("Vishal","Bond","aasds@gmail.com",18,"Mumbai");
const user2 = createUser("James","Bond","aasds@gmail.com",17,"Andaman");
const user3 = createUser("Rock","Bond","ads@gmail.com",21,"UAE");

console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
