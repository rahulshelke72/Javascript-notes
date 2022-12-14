
// Primitive vs reference data types 

// JavaScript provides six type of primitive values that includes 
//   Number, String, Boolean, Undefined, Symbol, and BigInt. 
// The size of Primitive values are fixed,
// therefore JavaScript stores the primitive value in the  stack

// let num1 = 10;
// let num2 = num1;
// console.log("value is num1 is",num1);
// console.log("value is num2 is",num2);
// num1++;
// console.log("after incrementing num1");
// console.log("value is num1 is",num1);
// console.log("value is num2 is",num2);


// refrence types 
// JavaScript provides three types of Reference values that include 
// Array, Object, and Function. 
// The size of a reference value is dynamic 
// therefore It is stored on Heap.

//array
let array1 = ["item1" , "item2"];
let array2  = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing item3 in array1 ");
console.log("array1",array1);
console.log("array2",array2);


