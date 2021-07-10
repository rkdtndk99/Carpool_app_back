//Test용 DB

const ClubModel = require("../src/models/club");

function create(owner, name, desc, callback) {

    const newClub = new ClubModel({
        clubOwner: owner,
        clubName: name,
        clubDesc: desc
    });

    newClub.save(newClub, (err, item) => {
        console.log(item);
        callback(item);
    });
}

function getAll(callback) {
    
    ClubModel.find({}, (error,result) => {
        callback(result);
    });

}

module.exports = {
    create,
    getAll
};