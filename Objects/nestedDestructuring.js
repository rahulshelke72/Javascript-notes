// nested destructuring 


const users = [
    {userId:1 , firstName:"Harshit",gender:"Male"},
    {userId:2 , firstName:"Sujit",gender:"Male"},
    {userId:3 , firstName:"Rahul",gender:"Male"},
]

const [{firstName:user1FirstName,userId}, ,{gender:user3Gender,userId:userId3}] = users;
console.log(user1FirstName,userId);
console.log(user3Gender,userId3);
