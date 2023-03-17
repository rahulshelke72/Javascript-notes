
class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
       return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    iscute(){
        return true;
    }
}

const animal1 = new Animal("Cat",2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());


class Dog extends Animal{

}

const doggy = new Dog("Tommy",2);
console.log(doggy);
console.log(doggy.eat());
console.log(doggy.isSuperCute());