// getter and setter 
class Person {
    constructor(firstName , lastName , age){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(Name){
        // Name.split(" ");
        // [Ayush , Verma];
        const [firstName,lastName] = Name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Harshit","Verma",23);
// console.log(person1.fullname());
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);
person1.fullName = "Ayush Verma";
console.log(person1);

