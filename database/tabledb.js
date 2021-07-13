//Test용 DB

const TableModel = require("../src/models/table");

function create(name, title, content, callback) {

    const newTable = new TableModel({
        name: name,
        title: title,
        content: content,
    });

    newTable.save((err, item) => {
        callback(item);
    });
}

function getAll(callback) {
    
    TableModel.find({}, (err, result) => {
        callback(result);
    });

}

function getMyTable(name, callback) {
    
    TableModel.find({"name": name}, (err, result) => {
        console.log(result);
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
    getMyTable,
    getOne,
    deleteOne,
    changeOne
};