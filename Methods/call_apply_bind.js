// call , apply , bind methods 

function about(hobby , favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}

const user1 =  {
    firstName : "Sujit" ,
    age : 21 ,
}

const user2 = {
    firstName : "Vijay" ,
    age : 21,
}

// call method
about.call(user1,"cricket","mazart");
about.call(user2,"Singing","Arijit Singh");

// apply method
about.apply(user1,["Guitar","Barch"]);

// bind method 
// bind methods always returns a function 

const func = about.bind(user1,"Drums","Dom");
func();

const func2 = about.bind(user2,"singing","Singh");
func2();

// don't do this mistake 
const user3 = {
    firstName : "abc" ,
    age : 21,
    about : function(){
        console.log(this.firstName,this.age);
    }
}
// In this case only reference is stored in myfunc
// this will not bind with user1 
// value of this remains window object 
// it return undefined as output 
const myfunc = user3.about; 
myfunc(); 

// we have to use bind method for binding 
const myfunc2 = user3.about.bind(user3);
myfunc2();