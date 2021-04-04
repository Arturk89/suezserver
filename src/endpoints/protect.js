//import jwt
const HTTPStatus = require('http-status')

const isVerified = true;

const middleware = (req, res, next) => {
    if(isVerified){
        next();
    }else{
        res.status(HTTPStatus.BAD_REQUEST).json({error: "invalid token"})
    }
}

module.exports = middleware;