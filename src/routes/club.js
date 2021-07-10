const express = require("express");
const db = require("../../database/clubdb");
const router = express.Router();

router.post("/create", (req, res) => {
    console.log("/club/create");
    db.create(
        req.body.clubOwner,
        req.body.clubName,
        req.body.clubDesc,
        (result) => {
            res.status(200).send()
        }
    );
});

router.get("/", (req, res) => {
    console.log("/club/");
    db.getAll((item) => {
        console.log(item)
        res.json(item)
    });
});

module.exports = router;