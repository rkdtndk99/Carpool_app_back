const express = require("express");
const Photo = require("../../database/photodb");
const PhotoModel = require("../models/photo")
const router = express.Router();

router.post("/create", (req, res) => {
    console.log("/photo/create");
    console.log(req.body);
    Photo.create(
        req.body.tableId,
        req.body.name,
        req.body.content,
        (result) => {
            console.log(result);
            res.status(200).send()
        }
    );
});

router.post("/", (req, res) => {
    console.log("/photo/")
    Photo.getPhoto(
        req.body.tableId,
        (item) => {
        // console.log(item)
        res.status(200).json(item)
    });
});

router.delete("/delete", (req, res) => {
    console.log("/photo/delete")
    PhotoModel.find({"name": req.body.name, "_id": req.body.PhotoId}, (err, result) => {
        console.log(result)
        if (result.length == 0) {
            console.log('A');
            res.status(400).send()
        } else {
            console.log('B');
            Photo.deleteOne(
                req.body.name,
                req.body.PhotoId,
                (item) => {
                // console.log(item)
                if (item == null) {
                    res.status(400).send()
                } else {
                    res.status(200).json(item)
                }
            });
        }
    });
});

module.exports = router;