// understand callback 
function myFunc(callback) {
    console.log("Function is doing task 1");
}

function myFunc2(){
    console.log("Function is doing task 2");
}

myFunc(myFunc2());

myFunc(() =>{
    console.log("function is doing task 2");
})

function getTwoNumbers(number1 , number2 , onSuccess , onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1 , number2); 
    }else{
        onFailure();
    }
    
}

function addTwoNumber(num1 , num2){
    console.log(num1 + num2);
}

getTwoNumbers(10,22,(num1, num2)=>{
    console.log(num1 + num2);
},()=>{
    console.log("Wrong data type");
    console.log("Please pass number only");
});
