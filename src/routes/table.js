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
        (result) => {
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

router.post("/mytable", (req, res) => {
    console.log("/table/mytable")
    Table.getMyTable(
        req.body.name,
        (item) => {
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

router.put("/update", (req, res) => {
    console.log("/table/update")
    
    const filter = { 
        name: req.body.name, 
        _id: req.body.tableId, 
    };
    const update = { 
        title: req.body.title, 
        content: req.body.content 
    };

    Table.changeOne(
        filter,
        update,
        (result) => {
            console.log(result);
            if (result == null) res.status(400).send();
            res.status(200).send();
        }
    );

});

module.exports = router;