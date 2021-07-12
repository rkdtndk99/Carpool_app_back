//Test용 DB

const PhotoModel = require("../src/models/photo");

function create(tableId, name, content, callback) {

    const newPhoto = new PhotoModel({
        tableId: tableId,
        name: name,
        content: content
    });
    console.log(newPhoto);

    newPhoto.save((err, item) => {
        console.log(item);
        callback(item);
    });
}

function getPhoto(tid, callback) {
    
    console.log(tid);
    PhotoModel.find({"tableId": tid}, (err, result) => {
        callback(result);
    });

}

function deleteOne(name, id, callback) {
    console.log(id);
    PhotoModel.findOneAndDelete({"name": name, "_id": id}, (err, result) => {
        callback(result);
    })
}

module.exports = {
    create,
    getPhoto,
    deleteOne
};