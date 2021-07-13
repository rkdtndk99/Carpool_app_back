const express = require("express");
const Comment = require("../../database/commentdb");
const CommentModel = require("../models/comment")
const router = express.Router();

router.post("/create", (req, res) => {
    console.log("/comment/create");
    console.log(req.body);
    Comment.create(
        req.body.tableId,
        req.body.name,
        req.body.content,
        (result) => {
            // console.log(result);
            res.status(200).send()
        }
    );
});

router.post("/", (req, res) => {
    console.log("/comment/")
    Comment.getComment(
        req.body.tableId,
        (item) => {
        // console.log(item)
        res.status(200).json(item)
    });
});

router.get("/mycomment", (req, res) => {
    console.log("/comment/mycomment")
    console.log(req.body);
    Comment.getMyComment(
        req.body.name,
        (item) => {
        console.log(item)
        res.status(200).json(item)
    });
});

router.delete("/delete", (req, res) => {
    console.log("/comment/delete")
    CommentModel.find({"name": req.body.name, "_id": req.body.commentId}, (err, result) => {
        console.log(result)
        if (result.length == 0) {
            console.log('A');
            res.status(400).send()
        } else {
            console.log('B');
            Comment.deleteOne(
                req.body.name,
                req.body.commentId,
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

router.put("/update", (req, res) => {
    console.log("/comment/update")
    console.log(req.body)
    

    const filter = { 
        name: req.body.name, 
        _id: req.body.id, 
    };
    const update = { 
        content: req.body.content 
    };
    CommentModel.find(filter, (err, item) => {
        console.log(item);
        if (item == null) res.status(200).send();
        Comment.changeOne(
            filter,
            update,
            (result) => {
                res.status(200).send();
            }
        );
    })

});

module.exports = router;