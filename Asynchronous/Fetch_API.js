// Javascript 

// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET requests , supports other methods as well
// Returns Promise 

const url = 'https://www.course-api.com/react-tours-project';

//console.log(fetch(url));

// fetch(url)
//    .then((resp)=>resp.json())
//    .then((data)=>console.log(data))
//    .catch((err)=>console.log(err))

const getTours = async () => {
    try{
        const resp = await fetch(url)
        return resp.json()
        // return data   return promise
        // console.log(data); 
    }catch(error){
        console.log(error);
    }
}

getTours().then((data)=>console.log(data))

// console.log(data);