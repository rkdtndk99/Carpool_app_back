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

function create(name, userId, password, callback) {

    const newUser = new userModel({
        name: name,
        userId: userId,
        password: password
    });

    userModel.findOne({userId: userId}, (err, result) => {

        if (result.length == 0) {
            newUser.save(newUser, (err, item) => {
                console.log('a');
                console.log(item);
                callback(item);
            });
        } else {
            console.log('B');
            console.log(result);
            callback(result);
        }
    })
}

module.exports = {
    login,
    create
};