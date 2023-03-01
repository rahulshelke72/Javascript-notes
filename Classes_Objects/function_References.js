
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
};


function createUser(firstName , lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName  = lastName;
    user.email  = email;
    user.age = age;
    user.address = address;  
    user.about = userMethods.about;
    user.is18  = userMethods.is18;
    return user;
}

const user1 = createUser("Vishal","Bond","aasds@gmail.com",5,"Mumbai");
const user2 = createUser("James","Bond","aasds@gmail.com",17,"Andaman");
const user3 = createUser("Rock","Bond","ads@gmail.com",21,"UAE");

console.log(user1.about());
console.log(user2.about());
console.log(user3.is18());
