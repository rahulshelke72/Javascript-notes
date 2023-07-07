// Javascript Nuggests 
// Width/Height - window , any element 
// innerHeight - window 
// innerwidth - window 
// getBoundClientRect() - any element 

console.log('height',window.innerHeight);
console.log('width',window.innerWidth);

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click',()=>{
    const dimensions = box.getBoundingClientRect()
    console.log(dimensions);
})