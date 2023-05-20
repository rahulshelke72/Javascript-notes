// setInterval 

// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },1000);
// 

const btn = document.getElementById('btn');
const body =  document.body;
setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const black = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${black},${green})`;
    body.style.background = rgb;
    
}, 1000);