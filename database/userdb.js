//Test용 DB

const userModel = require("../src/models/user");

function login(id, pwd, callback) {

    const query = {
        userId: id,
        password: pwd
    }
    userModel.findOne(query, (err, result) => {
        callback(result);
    });   
}

function create(name, userId, email, password, birth, callback) {

    const newUser = new userModel({
        name: name,
        userId: userId,
        email: email,
        password: password,
        birth: birth
    });

    // userId 같으면 생성 불가
    userModel.findOne({userId: userId}, (err, result) => {

        if (result == null) {
            newUser.save((err, item) => {
                callback(item);
            });
        } else {
            callback();
        }
    })
}

function kakao_create(name, email, birth, callback){

    const newUser = new userModel({
        name: name,
        email: email,
        birth: birth
    })

    newUser.save((err, item) => {
        console.log(item);
        callback(item);
    });
}

function getAll(callback) {
    userModel.find({}, (err,result) => {
        callback(result);
    });
}

function getUser(id, callback) {
    userModel.findById(id, (err, result) => {
        callback(result)
    })
}

// function joinClub(cname, uname, callback) {
//     console.log(cname);
//     console.log(uname);
//     userModel.updateOne({name: uname}, {$set: {clubName: cname}}, (err, result) => {
//         console.log(result);
//         callback(result)
//     })
// }

module.exports = {
    login,
    create,
    kakao_create,
    getAll,
    getUser
};