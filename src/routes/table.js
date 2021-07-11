const express = require("express");
const Table = require("../../database/tabledb");
const TableModel = require("../models/table");
const router = express.Router();

router.post("/create", (req, res) => {
    console.log("/table/create");
    Table.create(
        req.body.name,
        req.body.title,
        req.body.content,
        req.body.email,
        req.body.clubName,
        (result) => {
            // console.log(result);
            res.status(200).send()
        }
    );
});

router.get("/", (req, res) => {
    console.log("/table/")
    Table.getAll((item) => {
        // console.log(item)
        res.status(200).json(item)
    });
});

router.get("/:tableId", (req, res) => {
    console.log("/table/tableId")
    Table.getOne(
        req.params.tableId,
        (item) => {
        // console.log(item)
        res.status(200).json(item)
    });
});

router.delete("/delete", (req, res) => {
    console.log("/table/delete")
    console.log(req.body)

    TableModel.find({"name": req.body.name, "_id": req.body.tableId}, (err, result) => {
        console.log(result)
        if (result.length == 0) {
            console.log('A');
            res.status(400).send()
        } else {
            Table.deleteOne(
                req.body.name,
                req.body.tableId,
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