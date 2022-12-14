// Spread Operator 

const arr1 = [1,2,3];
const arr2 = [3,4,5];

// const arr3 = [...arr1,...arr2,86,95];
const newarray = [..."123456789"];
console.log(newarray);

// spread operator in objects 

const obj1 = {
    key1 : "val1",
    key2 : "val2"
};
const obj2 = {
    key1 : "Valueunique",
    key3 : "val3",
    key4 : "val4" 
};
const obj3 = {...obj2,...obj1};
//  const obj3 = {...["val1","val2"]};
//  const obj3 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(obj3);
