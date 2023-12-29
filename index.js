
const getDatabase= require('./mongoDb.js');

// const main = async ()=>{                                    //Method-1
//     let data = await getDatabase();
//     data = await data.find().toArray();
//     console.log(data);

// }
// main();

getDatabase().then((resp)=>{                                  //Method-2
    resp.find().toArray().then((data)=>{
        console.log(data);
    })

}) 

//NOTE : Both the methods are good to relove the promise return by the getDatabase() method