// Objects inside Array 
// very  useful in real world application

const users = [
    {userId:1 , firstName:"Harshit",gender:"Male"},
    {userId:2 , firstName:"Sujit",gender:"Male"},
    {userId:3 , firstName:"Rahul",gender:"Male"},
]

for(let user of users){
    console.log(user.firstName);
}