const getDatabase = require('./mongoDb');

const deleted = async()=>{
    const db = await getDatabase();
    // const deleteData = await db.deleteOne(               // insert only single record, [] not need to insert single record
    //     {name:'LKLL-520'})
    const deleteData = await db.deleteMany(                 //insert multiple record
            {name:'LKLL-520'}
    );
    console.log(deleteData);
    if(deleteData.acknowledged)
    console.log('Record deleted Successfully.');
}
deleted();