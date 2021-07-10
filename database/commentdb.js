//Test용 DB

const CommentModel = require("../src/models/comment");

function create(tableId, name, content, callback) {

    const newComment = new CommentModel({
        tableId: tableId,
        name: name,
        content: content
    });
    console.log(newComment);

    newComment.save((err, item) => {
        console.log(item);
        callback(item);
    });
}

function getComment(tid, callback) {
    
    console.log(tid);
    CommentModel.find({"tableId": tid}, (err, result) => {
        callback(result);
    });

}

function deleteOne(name, id, callback) {
    console.log(id);
    CommentModel.findOneAndDelete({"name": name, "_id": id}, (err, result) => {
        callback(result);
    })
}

module.exports = {
    create,
    getComment,
    deleteOne
};