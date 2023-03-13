// new leyword 
// 1.) this = {}
// 2.) return {}

// __proto__
// official ecmascript document 
// [[prototype]] 

// constructor function 
function CreateUser(firstName , lastName,email,age,address){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.email  = email;
    this.age = age;
    this.address = address;  
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}

CreateUser.prototype.sing = function(){
    return 'toon na na na la';
}

const user1 = new CreateUser("Vishal","Bond","aasds@gmail.com",18,"Mumbai");
const user2 = new CreateUser("James","Bond","aasds@gmail.com",17,"Andaman");
const user3 = new CreateUser("Rock","Bond","ads@gmail.com",21,"UAE");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

for(let key in user1){
 //    console.log(key);
  if(user1.hasOwnProperty(key)){
    console.log(key);
  }
}