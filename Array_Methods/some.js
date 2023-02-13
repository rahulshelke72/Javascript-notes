// some method 
const numbers = [1,3,4,7,9];

// if this array contain one even number or more some returns 
// true otherwise false

const ans = numbers.some((num)=>num%2 === 0);
console.log(ans);

const userCart = [
    {productId : 1 , productName : "Laptop" , price : 12200},
    {productId : 2 , productName : "tv" , price : 25200},
    {productId : 3 , productName : "mobile" , price : 21600},
    {productId : 4 , productName : "mackbook" , price : 250000}
];

// any prooduct has price > 100000

const answer = userCart.some((cartitem)=> cartitem.price > 100000);
console.log(answer);

