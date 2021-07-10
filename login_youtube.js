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

        if (err){
            console.log("Error while connecting to mongo client")
        } else{

            app.post('/signup', (req, res) =>{
                console.log('signup');
                const newUser={
                    name: req.body.name,
                    email: req.body.email,
                    userId: req.body.userId,
                    password : req.body.password
                }
                console.log(newUser);
    
                const query = {email: newUser.email}
    
                collection.findOne(query, (err, result) =>{
    
                    if(result==null){
                        collection.insertOne(newUser, (err, result)=>{
                            console.log('insert signup')
                            res.status(200).send()
                        })
                    } else{
                        res.status(400).send()  //Bad Request
                    }
                })
            })
            app.post('/kakaologin', (req, res)=>{

                const newUser ={
                    name : req.body.name,
                    userId : req.body.userId
                }
    
                const query = {userId: newUser.userId}
    
                collection.findOne(query, (err, result) =>{
                        if(result==null){
                            collection.insertOne(newUser, (err, result)=>{
                                console.log("insert One")
                                res.status(200).send()
                            })
                        } else{
                            res.status(200).send()  //Bad Request
                        }
                })
            })
            app.post('/login', (req, res) => {
                console.log('login')
                const query = {
                    userId: req.body.userId, 
                    password: req.body.password
                }

                collection.findOne(query, (err, result) => {

                    if (result != null) {

                        const objToSend = {
                            name: result.name,
                            email: result.email
                        }

                        res.status(200).send(JSON.stringify(objToSend))

                    } else {
                        res.status(404).send()
                    }
            })

        })
    }
}
});

app.listen(80, () =>{
    console.log("Listening on port 80...")
});
