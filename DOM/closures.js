// closure 

// function Outerfunction(){
//     function Innerfunction(){
//         console.log("Hello js");
//     }
//     return Innerfunction;
// }

// const ans = Outerfunction();
// ans();

function printFullName(firstName , lastName){
    function printName(){
        console.log(firstName + " " + lastName);
    }
    return printName;
}

const ans = printFullName("Harshit" , "Vashith");
ans();