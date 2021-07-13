/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String, // kakao
    userId: String,
    email: String, // kakao
    password: String,
    birth: String
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;