/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
    name: String, // 사용자 구분
    title: String,
    content: String,
    updated: {type: Date, default: Date.now}
});

const TableModel = mongoose.model("table", TableSchema);
module.exports = TableModel;