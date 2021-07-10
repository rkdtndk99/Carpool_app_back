/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String,
    email: String,
    clubName: String
});

const TableModel = mongoose.model("table", TableSchema);
module.exports = TableModel;