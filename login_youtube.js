const express = require('express');
const app = express();
const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

app.use(express.json());

mongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=>{
    if(err){
        console.log("Error while connecting mongo client")
    } else{
        const myDB = db.db('myDB')
        const collection = myDB.collection('myTable')

        // app.post('/signup', (req, res) =>{
        //     const newUser={
        //         name: req.body.name,
        //         email: req.body.email,
        //         password : req.body.password
        //     }

        //     const query = {email: newUser.email}

        //     collection.findOne(query, (err, result) =>{
        //         if(result==null){
        //             collection.insertOne(newUser, (err, result)=>{
        //                 res.status(200).send()
        //             })
        //         } else{
        //             res.status(400).send()  //Bad Request
        //         }
        //     })
        // })

        app.post('/login', (req, res)=>{

            console.log("login")
            const newUser ={
                name : req.body.name,
                userId : req.body.userId
            }

            const query = {userId: newUser.userId}

            collection.findOne(query, (err, result) =>{
                if(err) {
                    res.status(400).send()
                } else {
                    if(result==null){
                        collection.insertOne(newUser, (err, result)=>{
                            console.log("insert One")
                            res.status(200).send()
                        })
                    } 

                    res.status(200).send()  //Bad Request
                }
            })
        })
    }
});

app.listen(80, () =>{
    console.log("Listening on port 80...")
});
