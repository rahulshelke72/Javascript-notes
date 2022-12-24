// Functions inside functions 
function app(){
    const func = () => {
        console.log("Hello from Myfunc");
    }
    const sum = (num1 , num2) =>{
        return num1 + num2;
    }
    const prod = (num1 , num2) => num1 * num2;
    
    console.log("Inside Function");
    func();
    console.log(sum(23,27));
    console.log(prod(10,10));

}
app();