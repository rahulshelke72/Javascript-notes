 // Javascript Nuggests 

 const heading = document.querySelector('.heading');
//  console.log(heading);

 const listItems = document.querySelectorAll('.list-item');
//  console.log(listItems);

 
 const getElement = (Selector , isList) => {
  const el = isList 
    ? [...document.querySelectorAll(Selector)] 
    : document.querySelector(Selector);
    
    // not a list - exist or not 
    // list - empty or not 

    // if(!isList && el) return el;
    // if(isList && !el.length < 1) return el;

    if((!isList && el) || (isList && !el.length < 1)) return el;
    throw new Error(`Please double check selector : ${Selector}`);  
 
 };

 console.log(getElement('.list-item',true));