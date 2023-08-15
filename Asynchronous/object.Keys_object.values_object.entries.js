// Three methods to convert objects into arrays
// Object.keys() - convert property names into array
// Object.values() - convert property values into array 
// Object.entries() - converts both

const person = {
    name : 'jhon',
    age : '25',
    status : 'student',
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

// map method 

const newResult = entries.map((item) => {
    const [first , second] = item;
    console.log(first , second);
    return first;
});

// console.log(newResult);


// for of loop
for(const [first , second] of entries){
    //const [first , second] = item;
    console.log(first,second);
}