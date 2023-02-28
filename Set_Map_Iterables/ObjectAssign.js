// clone using object.assign 
// memory 

const obj = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {...obj};

const obj3 = Object.assign({},obj);
obj.key3 = "value3";

console.log(obj3);
console.log(obj);
console.log(obj2);
<<<<<<< HEAD
=======

// clone using object.assign 
// memory 

const obj = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {...obj};

const obj3 = Object.assign({},obj);
obj.key3 = "value3";

console.log(obj3);
console.log(obj);
console.log(obj2);

>>>>>>> be24bf50c3e097b5897b1c4a5f0183c5166126e8
