// How to iterate objects 

const person = {
    name : "Rahul",
    age : 22,
    "persons hobbies" : ["Music","Cricket","Cooking","Gym"]
    
} 

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(person[key]);
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key,"   :  ",person[key]);
// }

console.log( Object.keys(person));
console.log(typeof Object.keys(person));
const val =  Array.isArray(Object.keys(person));
console.log(val);

for (let key of Object.keys(person)){
    console.log(person[key]);
}


