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

function create(name, userId, email, password, callback) {

    const newUser = new userModel({
        name: name,
        userId: userId,
        email: email,
        password: password,
        clubName: null
    });

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

function kakao_create(name, email, callback){

    const newUser = new userModel({
        name: name,
        email: email
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

function joinClub(cname, uname, callback) {
    console.log(cname);
    console.log(uname);
    userModel.updateOne({name: uname}, {$set: {clubName: cname}}, (err, result) => {
        console.log(result);
        callback(result)
    })
}

module.exports = {
    login,
    create,
    kakao_create,
    getAll,
    joinClub
};