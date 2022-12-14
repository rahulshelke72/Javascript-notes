// Functions 

// Input  :  array , Integer
// Output :  return index if number found or not found return -1

function findNumber(arr,n){
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
console.log("\n");