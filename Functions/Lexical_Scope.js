// Lexical Scope 
const myVar = "vaule1";

function Myfunc() {
    
    function func1() {
        // const myVar = "value1";
        const func2 = () => {
            console.log("Inside func2 :",myVar);
        }
        func2();
    }
    console.log("Inside MyFunc :",myVar);
    func1();
}

Myfunc();
