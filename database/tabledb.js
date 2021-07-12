//Test용 DB

const TableModel = require("../src/models/table");

function create(name, title, content, email, clubName, callback) {

    const newTable = new TableModel({
        name: name,
        title: title,
        content: content,
        email: email,
        clubName: clubName
    });
    console.log(newTable);

    newTable.save((err, item) => {
        console.log(item);
        callback(item);
    });
}

function getAll(callback) {
    
    TableModel.find({}, (err, result) => {
        callback(result);
    });

}

function getOne(id, callback) {

    TableModel.findById(id, (err, result) => {
        callback(result);
    });

}

function deleteOne(name, id, callback) {
    console.log(id);
    TableModel.findOneAndDelete({"name": name, "_id": id}, (result) => {
        callback(result);
    })
}

function changeOne(filter, update, callback) {
    console.log('updateOne0')
    TableModel.findOneAndUpdate(
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
    getAll,
    getOne,
    deleteOne,
    changeOne
};