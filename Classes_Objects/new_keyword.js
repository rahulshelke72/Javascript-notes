// new keyword
function createUser(firstName , age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}

const user1 = new createUser("Harshit",6); 

// new keyword 
// 1) empty object this = {}
// 2) return this
// It automatically chaining with prototype No need to do explicity 
// like const user = Object.create(userMethods); 

user1.about();