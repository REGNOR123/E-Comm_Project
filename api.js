const express = require('express');
const getDatabase = require('./mongoDb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());
app.get('/', async (request,response)=>{

    let data = await getDatabase();
    data = await data.find().toArray();
    response.send(data);
})

app.post('/', async (request,response)=>{
    let data = await getDatabase();
    let result = await data.insertMany(request.body);
    response.send(result);
console.log(data);
})

app.put('/', async (request,response)=>{

    let data = await getDatabase();
    let result = await data.updateOne(
        {name : request.body.name},{$set: request.body}
        )
    response.send({result:"update"});
})

app.delete('/:id', async (request, response)=>{

    console.log(request.params.id);
    const data = await getDatabase();
    const result = await data.deleteOne(
        {_id: new mongodb.ObjectId(request.params.id)}
        )
    response.send("Done")

})

app.listen(5000);