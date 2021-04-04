const User = require("./UserModel");
const HTTPStatus = require('http-status');


exports.getUsers = async (req, res) => {
    User
        .find()
        .then(users => res.status(HTTPStatus.OK).json(users))
        .catch(err => res.status(HTTPStatus.BAD_REQUEST).json(err))
}