// class keyword
// classes are fake 

class CreateUser{
    constructor(firstName , lastName,email,age,address)
    {
        console.log("Constructor Called");
        this.firstName = firstName;
        this.lastName  = lastName;
        this.email  = email;
        this.age = age;
        this.address = address; 
    }
    about(){
       return `${this.firstName} is ${this.age} years old`
    }

    is18(){
        return  this.age >= 18;;
    }

    sing(){
        return 'toon na na na la';
    }
}



const user1 = new CreateUser("Vishal","Bond","aasds@gmail.com",18,"Mumbai");
const user2 = new CreateUser("James","Bond","aasds@gmail.com",17,"Andaman");
const user3 = new CreateUser("Rock","Bond","ads@gmail.com",21,"UAE");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
console.log(Object.getPrototypeOf(user1));