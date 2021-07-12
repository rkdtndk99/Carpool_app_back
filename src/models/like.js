/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
    tableId: String, // table _id
    userId: String, // 사용자 구분
    
});

const CommentModel = mongoose.model("comment", CommentSchema);
module.exports = CommentModel;