// 1. mongoose 모듈 가져오기
var mongoose = require('mongoose');
var dbURL = 'mongodb://localhost:27017/test';
// 2. testDB 세팅
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(dbURL);
// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on('error', function(){
    console.log('Connection Failed!');
});
// 5. 연결 성공
db.once('open', function() {
    console.log('Connected!');
});