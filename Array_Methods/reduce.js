// reduce method 

const array = [1,2,3,4,5,10];

const sum = array.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue;
},0);

// 0 is inital value of accumulator parameter 

console.log(sum);

// accumulator    currentValue    return   
//    1                2              3
//    3                3              6
//    6                4              10
//    10               5              15
//    15               6              25

const userCart = [
    {productId : 1 , productName : "Laptop" , price : 12200},
    {productId : 1 , productName : "Laptop" , price : 25200},
    {productId : 1 , productName : "Laptop" , price : 38600}
];

const total = userCart.reduce((totalprice,currentProduct)=>{
     return totalprice + currentProduct.price;
},0);

console.log(total);

// accumulator           currentValue            return   
//    0                {id,name,price}           12200          
//    12200               25200                  37400
//    37400               38600                  76000
