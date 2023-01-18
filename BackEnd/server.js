const express = require('express')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const ObjectID = require('mongodb').ObjectID;

const app = express()
app.use(cors());

app.use(express.json())
let database

app.get('/crud',(req, resp) => {
    database.collection('Crud')
    .find()
    .toArray((err,result) => {
        if(err) throw err
        resp.send(result)
        console.log(result)
    })
})

app.post('/crud', (req, resp) => {
    const person = req.body
    database.collection('Crud')
    .insertOne(person)
    .then(result => {
        resp.status(201).json(result)
    })
})

app.delete('/crud/:id', (req, res,) => {
    const deleteId = ObjectID(req.params.id);
    database.collection('Crud')
    .deleteOne({ _id: deleteId }, (err, result) => {
        if (err) throw err;
        res.send('deleted')
    })
})  

app.put('/crud/:id', (req, res) => {
    const updateId = req.params.id;
    database.collection('Crud')
    .updateOne({ _id: ObjectID(updateId)},{$set: req.body}, (err, result) => {
        if (err) throw err;
        res.send('updated');
    });
});


app.listen(4000, () => {
    MongoClient.connect('mongodb+srv://Albert:eBwAGrcgBYbFdJDK@crud.gpsxdjg.mongodb.net/test?authMechanism=SCRAM-SHA-1', {useNewUrlParser: true}, (err, result) => {
        if(err) throw err
        database = result.db('crud')
        console.log("connected")
    })
})