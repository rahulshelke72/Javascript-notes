// while loop in array

const  cars = ["tata","mahindra","bmw","rover"];
const cars2 = [];

let i=0;
while(i<cars.length){
     cars2.push(cars[i].toUpperCase());
    i++;
}
console.log(cars2);
