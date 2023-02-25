// Maps
// Map is an iterable 

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects 

// different between maps and objects 

// objects can only have string or symbol 
// as key 

// In maps you can use anything as key 
// like array , number , string 

// object literal 
// key -> string 
// key ->symbol 


const person = new Map();
person.set('FirstName','James');
person.set('age',7);
person.set(1,'one');
person.set([1,2,3],'OneTwoThree');
person.set({1:'one'},'onetwothree');
console.log(person);
console.log(person.get('age'));
console.log(person.get(1));
console.log(person.keys());
for(let key of person.keys()){
      console.log(key , typeof key);
}

for(let [key , value] of person){
    // console.log(Array.isArray(key));
    console.log(key, value);

}


const person1 = {
    id : 1,
    firstName : 'Harshit'
}

const person2 = {
    id : 2,
    firstName : 'Rock'
}

const extraInfo = new Map();
extraInfo.set(person1 , {age:8, gender:'Male'});
extraInfo.set(person2 , {age:9, gender:'Female'});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

