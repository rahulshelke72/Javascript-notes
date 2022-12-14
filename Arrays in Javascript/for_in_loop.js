
// for in loop in array 

const  cars = ["tata","mahindra","bmw","rover"];
const cars2 = [];

for(let index in cars){
    cars2.push(index.toUpperCase());
   
}
console.log(cars2)