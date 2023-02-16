// Sets (it is Iterable)
// Store data
// Sets also have its own methods 
// No Index based access 
// Order is not guaranted 
// unique items only (No duplicates allowed)

const Items = ['item1','item2','item3'];
const numbers =  new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(Items);

console.log(numbers);

if(numbers.has(1)){
    console.log("1 is  present");
}else{
    console.log("1 is not present");
}

for(let number of numbers){
    console.log(number);
}

const arr = [1,2,3,4,4,4,5,5,6];
const duplicateNumbers = new Set(arr);
console.log(duplicateNumbers);
console.log(arr);

let length=0;
for(let number of duplicateNumbers){
    length++;
}
console.log("Length : ",length);