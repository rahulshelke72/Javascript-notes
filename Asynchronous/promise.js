// Promises 

const bucket = ['coffee','chips','vegetables','salt','rice'];

const friedRicePromise =  new Promise((resolve,reject)=>{
   if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
    resolve("Fried Rice");
   }else{
    reject("Couldn't do it");
   }
})

// produce 



// consume 
// how to consume