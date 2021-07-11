const express = require("express");
const Club = require("../../database/clubdb");
const ClubModel = require('../models/club');
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
        // console.log(item)
        res.json(item)
    });
});

// club delete
router.delete("/delete", (req, res) => {
    console.log("/club/delete")
    console.log(req.body)

    ClubModel.find({"clubOwner": req.body.clubOwner, "_id": req.body.clubId}, (err, result) => {
        console.log(result)
        if (result.length == 0) {
            console.log('A');
            res.status(400).send()
        } else {
            Club.deleteOne(
                req.body.clubOwner,
                req.body.clubId,
                (item) => {
                console.log('B');
                console.log(item)
                res.status(200).json(item)
                }
            );
        }
    });
});

module.exports = router;