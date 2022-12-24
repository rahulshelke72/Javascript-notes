// call back functions 

function myfunc2(name){
     console.log("Inside myfunc");
     console.log(`Your name is ${name}`);
}

function myfunc(callback){
    console.log("Intro to callback concept in javascript");
    callback("Sujit");
}

myfunc(myfunc2);