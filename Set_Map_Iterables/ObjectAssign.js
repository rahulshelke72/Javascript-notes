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
