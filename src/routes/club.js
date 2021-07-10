const express = require("express");
const Club = require("../../database/clubdb");
const router = express.Router();

// club create
router.post("/create", (req, res) => {
    console.log("/club/create");
    Club.create(
        req.body.clubOwner,
        req.body.clubName,
        req.body.clubDesc,
        (result) => {
            res.status(200).send()
        }
    );
});

// club get All
router.get("/", (req, res) => {
    console.log("/club/");
    Club.getAll((item) => {
        console.log(item)
        res.json(item)
    });
});

module.exports = router;