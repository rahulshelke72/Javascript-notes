// static methods and properties 
class Person {
    constructor(firstName , lastName , age){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
    }
    static contactInfo(){
        return 'this is person class';
    }
    static desc = "static property";
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
console.log(Person.contactInfo());
const info = Person.contactInfo();
console.log(info);
console.log(Person.desc);







