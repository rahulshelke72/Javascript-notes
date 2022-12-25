// Important array methods 

// foreach
const number = [4,2,1,5];

number.forEach(function(number , index){
    console.log(`index is ${index} and Number is ${number} `);
    console.log(`${number} * 2 :`,number * 2);    
});


const users = [
    {firstName : "Harshit" , age : 23},
    {firstName : "Akash" , age : 20},
    {firstName : "Sujit" , age : 22},
    {firstName : "Vijay" , age : 21}
]

users.forEach(function(user,index){
    console.log(user.firstName , index);
});

users.forEach((user,index)=>{
    console.log(user.firstName , index);         
});

for (let user of users) {
    console.log(user.firstName+" "+user.age);
}


// map 
// filter
// reduce