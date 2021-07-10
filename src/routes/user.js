const express = require("express");
const User = require("../../database/userdb");
const router = express.Router();

//ex) http://172.10.18.120/user/login

// user login
router.post("/login", (req,res) =>{
    console.log("user/login");
    User.login(
        req.body.userId,
        req.body.password,
        (result)=> {
            if (result != null) {

                const objToSend = {
                    name: result.name,
                    userId: result.userId
                }

                res.status(200).send(JSON.stringify(objToSend))

            } else {
                res.status(404).send()
            }
        }
    );
});

// user create
router.post("/create", (req,res) => {
    console.log("user/create");
    User.create(
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

// kakao create
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



// userlist get all
router.get("/", (req,res) => {
    console.log("/user/");
    User.getAll((item) => {
        console.log(item)
        res.json(item)
    });
});

// user club join
router.post("/joinClub/:clubName", (req, res) => {
    console.log("/user/joinClub");
    console.log(req.body)
    const clubName = req.params.clubName;
    console.log(clubName);
    User.joinClub(clubName, req.body.userName, (item) => {
        console.log(item)
        res.json(item)
    });
});

module.exports = router;