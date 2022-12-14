// Object Destructuring 

const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong : "Kashmir",
};

let {bandName , famousSong , ...restProps} = band;
console.log(bandName);
console.log(restProps);
