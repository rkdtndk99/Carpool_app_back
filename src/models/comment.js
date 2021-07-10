/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    tableId: String, // table _id
    name: String, // 사용자 구분
    content: String,
    updated: {type: Date, default: Date.now}
});

const CommentModel = mongoose.model("comment", CommentSchema);
module.exports = CommentModel;