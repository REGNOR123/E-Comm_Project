const getDatabase = require('./mongoDb');

const update = async()=>{
    const db = await getDatabase();
    // const updatedata = await db.updateOne(               // insert only single record, [] not need to insert single record
    //     {name:'L-50'},{$set : {name:'LKLL-520',price:'800$'}}
    // )
    const updatedata = await db.updateMany(                 //insert multiple record
             {name:'L-50'},{$set : {name:'LKLL-520',price:'800$'}}
    );
    console.log(updatedata);
    if(updatedata.acknowledged)
    console.log('Record Updated Successfully.');
}
update();