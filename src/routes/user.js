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
            console.log(result);
            if (result != null) {
                res.status(200).json(result);
            } else {
                res.status(404).send()
            }
        }
    );
});

// user create
router.post("/create", (req,res) => {
    console.log("/user/create");
    User.create(
        req.body.name,
        req.body.userId,
        req.body.email,
        req.body.password,
        req.body.birth,
        (result) => {
            if (result == null) {
                console.log('same userId')
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
    User.kakao_create(
        req.body.name,
        req.body.email,
        req.body.birth,
        (result) => {
            if (result == null) {
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        }
    );
});

router.get("/getUser", (req, res) => {
    console.log("/user/getUser");
    console.log(req.body);
    User.getUser(
        req.body._id,
        (item) => {
        console.log(item);
        res.json(item);
    })
})

// userlist get all
router.get("/", (req, res) => {
    console.log("/user/");
    User.getAll((item) => {
        console.log(item)
        res.json(item)
    });
});

// user club join
// router.post("/joinClub/:clubName", (req, res) => {
//     console.log("/user/joinClub");
//     console.log(req.body)
//     const clubName = req.params.clubName;
//     console.log(clubName);
//     User.joinClub(clubName, req.body.userName, (item) => {
//         console.log(item)
//         res.json(item)
//     });
// });

module.exports = router;