const express = require("express");
const db = require("../../database/userdb");
const router = express.Router();

//ex) http://172.10.18.120/user/login
router.post("/login", (req,res) =>{
    console.log("user/login");
    db.login(
        req.body.userId,
        req.body.password,
        (result)=> {
            if (result != null) {

                const objToSend = {
                    name: result.name,
                    email: result.email
                }

                res.status(200).send(JSON.stringify(objToSend))

            } else {
                res.status(404).send()
            }
        }
    );
});

router.post("/create", (req,res) => {
    console.log("user/create");
    db.create(
        req.body.name,
        req.body.userId,
        req.body.email,
        req.body.password,
        (result) => {
            if (result == null) {
                console.log('already register')
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        }
    );
});

router.post("/kakao_create", (req,res) => {
    console.log("user/kakao_create");
    db.kakao_create(
        req.body.name,
        req.body.email,
        (result) => {
            if (result == null) {
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        }
    );
});

module.exports = router;