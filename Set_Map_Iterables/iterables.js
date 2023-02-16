// Iterables 
// We can use for of loop 
// string , array are iterable 
const firstName = "harshit";
for(let char of firstName){
    console.log(char);
}

const Items = ['Item1','Item2','Item3','Item4'];
for(let item of Items ){
    console.log(item);
}

// Objects are not Iterable 
// We cannot use For of loop on objects 
// Because it contains value and Key pair 


// Array like objects  
// It contains length property
// we can access it by index 
const lastName = "Sujit";
console.log(lastName.length);
console.log(lastName[2]);