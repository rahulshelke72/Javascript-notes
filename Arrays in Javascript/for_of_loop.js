
// for of loop in array 

const  cars = ["tata","mahindra","bmw","rover"];
const cars2 = [];

for(let a of cars){
    
    cars2.push(a.toUpperCase());
}
  
console.log(cars2);