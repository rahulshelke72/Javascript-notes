const btn = document.querySelector('.btn');


const debounce = (fn) => {
    let timeoutID; 
    return() => {
        console.log(timeoutID);
        clearTimeout(timeoutID);
        timeoutID = setTimeout(()=>{
          fn();
        },2000);
    };  
};

btn.addEventListener(
    'click',
     debounce(()=>{
        console.log('you clicked me');
     }
));   

// delay logic 
// so it runs 2s after last click
// setTimeout returns id , which pass into clearTimeout 

