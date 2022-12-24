// default parameters 

function sum(a,b){
    if(typeof b === "undefined"){
        b = 0;
    }
    return a+b;
}

const ans = sum(10);
console.log(ans);

// set value of b by default to 0 
// if value b is not passed then it set to 0 
function add(a,b=0){
    return a+b;
}

const ans1 = add(98);
console.log(ans1);