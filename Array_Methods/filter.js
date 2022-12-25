// filter method 

const array = [1,2,4,3,6,7,8];

const even = array.filter((number)=>{
    return number%2===0;
});

console.log(even);

const odd = array.filter((num)=>{
     return num%2!==0;
})

console.log(odd);