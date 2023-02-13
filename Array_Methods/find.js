// find method 

const MyArray = [ "Hello" , "doggy" , "cat" , "lion"];

function isLength3(string){
    return string.length == 3;
}

const ans  =  MyArray.find((string)=>string.length == 3);
console.log(ans);

const persons = [
    {userId:1,UserName:"harshit"},
    {userId:2,UserName:"harsh"},
    {userId:3,UserName:"swapnil"},
    {userId:4,UserName:"vishal"},
    {userId:5,UserName:"shubham"}
];

const myUser = persons.find((user)=>user.userId == 3);
console.log(myUser);