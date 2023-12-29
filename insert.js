const getDatabase = require('./mongoDb');

const insert = async()=>{
    const db = await getDatabase();
    // const insertdata = await db.insertOne(               // insert only single record, [] not need to insert single record
    //     {name:'Q-50', brand:'M14D', price:'356$'},)
    const insertdata = await db.insertMany(                 //insert multiple record
        [{name:'Q-50', brand:'M14D', price:'356$'}, 
        {name:'L-50', brand:'MN4D', price:'286$'}]
    );
    if(insertdata.acknowledged)
    console.log('Record inserted Successfully.');
}
insert();