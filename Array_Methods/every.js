// every method 

const numbers = [2,4,6,8,10];

const ans = numbers.every((num)=>num%2 === 0);

// callback function ---->  return true / false (boolean)
// every method   ------>   return true / false (boolean)

console.log(ans);

const userCart = [
    {productId : 1 , productName : "Laptop" , price : 12200},
    {productId : 2 , productName : "tv" , price : 25200},
    {productId : 3 , productName : "mobile" , price : 21600}
];

// check every product in userCart has price < 30000

const answer =  userCart.every((cartItem)=>cartItem.price < 30000);
console.log(answer);