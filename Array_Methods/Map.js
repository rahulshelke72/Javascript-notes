// Intro to array methods

// Map 
// map returns array 
const number = [4,6,8,1,5];

function square(){
    return number * number ;
}

const array =  number.map((number)=>{
    
    return number * number;

});

console.log(array);

const users = [
    {firstName : "SUjit",age : 21},
    {firstName : "Vijay",age : 22},
    {firstName : "Rishi",age : 23},
    {firstName : "Yash",age : 24},
];

const firstname =  users.map((user,index)=>{
    return user.firstName ;
})

console.log(firstname);


