const express = require("express");
const db = require("../../database/tabledb");
const router = express.Router();

router.post("/create", (req, res) => {
    console.log("/table/create");
    db.create(
        req.body.name,
        req.body.title,
        req.body.content,
        (result) => {
            res.status(200).send()
        }
    );
});

router.get("/", (req, res) => {
    db.getAll((item) => {
        console.log(item)
        res.json(item)
    });
});

module.exports = router;