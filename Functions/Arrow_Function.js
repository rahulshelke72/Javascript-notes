// Arrow Function 
// Function Expression 

const singhBirthday = () => {
    console.log("Happy Birthday to you ....");
}

singhBirthday();

const sum = (num1,num2 , num3) =>{
    return num1 + num2 + num3;
}

console.log(sum(11,23,45));

const evenOdd = n => evenOdd % 2 == 0;


console.log(evenOdd(17));

// When we have single parameter and only return statement we can write in single line
// follow below mentioned code 

const stringChar = str => str[0];

console.log(stringChar("Vin Diesel"));

const findNumber =  (arr,n) => {
    for(var i=0;i<arr.length;i++){
        if( arr[i] === n)
           return i;
    }
    return -1;
}
console.log("\n");
const arr = [1,2,10,9,4]; 
const res = findNumber(arr,9);
console.log(res);

