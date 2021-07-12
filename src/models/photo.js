/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    name: String, // 사용자 구분
    title: String,
    content: String,
    clubName: String
});

const PhotoModel = mongoose.model("photo", PhotoSchema);
module.exports = PhotoModel;