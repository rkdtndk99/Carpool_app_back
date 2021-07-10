//Test용 DB

const TableModel = require("../src/models/table");

function create(name, title, content, callback) {

    const newTable = new TableModel({
        name: name,
        title: title,
        content: content
    });

    newTable.save(newTable, (err, item) => {
        console.log(item);
        callback(item);
    });
}

function getAll(callback) {
    
    TableModel.find({}, (error,result) => {
        callback(result);
    });

}

module.exports = {
    create,
    getAll
};