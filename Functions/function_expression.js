// Function Expression 

const singhBirthday = function(){
    console.log("Happy Birthday to you ....");
}

singhBirthday();

const evenOdd = function(n){
    return evenOdd % 2 == 0;
}

console.log(evenOdd(17));


const findNumber =  function(arr,n){
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

