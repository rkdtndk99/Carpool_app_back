// Express 기본 모듈 불러오기
const express = require('express');
const http = require('http');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./src/routes/user');
const tableRouter = require('./src/routes/table');
const clubRouter = require('./src/routes/club');
const commentRouter = require('./src/routes/comment');


const SocketServer = require('websocket').server

const dbURL = 'mongodb://localhost:27017/clubDB'
// 익스프레스 객체 생성
var app = express();

//mongodb 연결 및 설정
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', function(){
    console.log('Connection Failed!');
});
db.once('open', function() {
    console.log('DB Connected!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 80);

app.get('/', (req, res) => {
    res.status(418).send("EveryClub Start");
});

//router 연결
app.use('/user', userRouter);
app.use('/table', tableRouter);
app.use('/club', clubRouter);
app.use('/comment', commentRouter);

// Express 서버 시작
// http.createServer(app).listen(app.get('port'), function(){
//     console.log(app.get('port') + "에서 express 실행 중");
// });

const server = http.createServer(app);

server.listen(80, ()=>{
    console.log("Listening on port 80...")
})

wsServer = new SocketServer({httpServer:server})

const connections = []

wsServer.on('request', (req) => {
    const connection = req.accept()
    console.log('new connection')
    connections.push(connection)

    connection.on('message', (mes) => {
        connections.forEach(element => {
            if (element != connection)
                element.sendUTF(mes.utf8Data)
        })
    })

    connection.on('close', (resCode, des) => {
        console.log('connection closed')
        connections.splice(connections.indexOf(connection), 1)
    })

})