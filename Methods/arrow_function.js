// arrow function 
// In arrow function this always points one level upper than current object
// consider in simple function this points to user1 object that time 
// this in arrow function points to window object rather than user1 object

const user3 = {
    firstName : "abc" ,
    age : 21,
    about : ()=>{
        console.log(this);
        console.log(this.firstName,this.age);
    }
}

user3.about();
// first prints window object then
// It prints undefined undefined