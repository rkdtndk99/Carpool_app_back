/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const clubSchema = new mongoose.Schema({
    clubOwner: String,
    clubName: String,
    clubDesc: String
});

const clubModel = mongoose.model("club", clubSchema);
module.exports = clubModel;