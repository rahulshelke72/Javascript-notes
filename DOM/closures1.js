
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("hi you called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hu");
        }
    }
}


const myfunc = func();
myfunc();
myfunc();

const myfunc2 = func();
myfunc2();
myfunc2();
myfunc2();
