// synchronous programming vs asynchronous programming
// synchronous programming 
// synchronous programming single threaded 
// console.log("script start");

// for(let i=1;i<1000;i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// setTimeout 

console.log("Script start");

function hello(){
    console.log("Hello world!");
}

setTimeout(hello,1000);
console.log("Script end");