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

function getMyComment(name, callback) {
    
    CommentModel.find({"name": name}, (err, result) => {
        console.log(result);
        callback(result);
    });
}

function deleteOne(name, id, callback) {
    console.log(id);
    CommentModel.findOneAndDelete({"name": name, "_id": id}, (err, result) => {
        callback(result);
    })
}

function changeOne(filter, update, callback) {
    console.log('updateOne0')
    CommentModel.findOneAndUpdate(
        filter, 
        update, 
        {
            new: true
        },
        (result) => {
            callback(result);
        }
    );
}

module.exports = {
    create,
    getComment,
    getMyComment,
    deleteOne,
    changeOne
};