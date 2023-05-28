// callbacks , callback hell , pyramid dom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
setTimeout(()=>{
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
    setTimeout(()=>{
        heading2.textContent = "Heading 2";
        heading2.style.color = "purple";
    },1000)
},1000)


const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// Text      Delay   Color 

// one       1s       Violet
// two       2s       purple
// three     2s       red
// four      1s       Pink 
// five      2s       green
// six       3s       blue
// seven     1s       brown 



console.log("Hello World");

