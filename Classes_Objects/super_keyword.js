// super 

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

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    eat(){
        return `Modified eat : ${this.name} is eating`;
    }
    run(){
        return `${this.name} running at speed ${this.speed}`;
    }
}

const doggy = new Dog("Tommy",2,48);
console.log(doggy);
console.log(doggy.run())
console.log(doggy.eat());
