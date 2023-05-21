// setInterval 

// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },1000);
// 

const btn = document.getElementById('btn');
const body =  document.body;
const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const black = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${black},${green})`;
    body.style.background = rgb;
    
}, 1000);

const button = document.querySelector("button");
console.log(button);

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
});

console.log(intervalId);