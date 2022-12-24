// rest parameter 

function display(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    
}
display(1,2,3,4,5,6,7,8,9);


function addAll(...a){
    let sum = 0 ;
    
    a.forEach(element => {
       sum+=element;
    });

    return sum;
}

const ans = addAll(1,2,3,4,5,6,7,8,9,82,38,22,239,123,21319,1);
console.log(ans);