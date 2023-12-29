const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');
const dataBaseName = 'Project_E-Commerce';

const getDatabase = async()=>{

    let collectionName = 'products';
    let dbConnection = await client.connect();
    let result = dbConnection.db(dataBaseName).collection(collectionName);
    return result ;
}

module.exports = getDatabase;
// const main = async ()=>{
//     let data = await getDatabase();
//     data = await data.find().toArray()

//     console.log(data);
    
// }
// main();