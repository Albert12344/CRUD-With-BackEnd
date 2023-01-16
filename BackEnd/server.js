const express = require('express')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')

const app = express()
app.use(cors());

app.use(express.json())
let database

app.get('/', (req, resp) => {
    resp.send('Welcome')
})
app.get('/crud',(req, resp) => {
    database.collection('Crud').find().toArray((err,result) => {
        if(err) throw err
        resp.send(result)
        console.log(result)
    })
})

app.post('/crud', (req, resp) => {
    resp.send(result)
    console.log(result)
})


app.listen(4000, () => {
    MongoClient.connect('mongodb+srv://Albert:eBwAGrcgBYbFdJDK@crud.gpsxdjg.mongodb.net/test?authMechanism=SCRAM-SHA-1', {useNewUrlParser: true}, (err, result) => {
        if(err) throw err
        database = result.db('crud')
        console.log("connected")
    })
})