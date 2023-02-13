// sort Method 
// AsCII table 
// char : ascii value 

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// 5,9,1200,400,3000
// sort Method sorts using their ascii value 
// first converted to string and takes respective ascii value of first character of string
const numbers = [5,9,1200,400,3000];
// [53,57,49,52,51]
// output : [49,51,52,53,57] 
// i.e  [1200,3000,400,5,9]

// numbers.sort();
console.log(numbers);

// sorts Descending order in b-a 
// sorts in Ascending order a-b
numbers.sort((a,b)=>a-b);

numbers.sort((a,b)=>{
      return b-a;
} );

console.log(numbers);

const products = [
    {productId:1,productName:"p1",price:300},
    {productId:2,productName:"p2",price:3000},
    {productId:3,productName:"p3",price:200},
    {productId:4,productName:"p4",price:800},
    {productId:5,productName:"p5",price:500},
    
]


const lowToHigh =  products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
    console.log(products);
    console.log(lowToHigh);

    const highToLow =  products.slice(0).sort((a,b)=>{
        return b.price-a.price
    });
        console.log(products);
        console.log(highToLow);
