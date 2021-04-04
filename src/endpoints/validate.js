const Joi = require('joi');
const HTTPStatus = require('http-status');

const middleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        const valid = error == null;

        if(valid){
            next();
        }else{
            const { details } = error;
            const message = details.map(item => item.message).join(",")
            res.status(HTTPStatus.BAD_REQUEST).json({error: message})
        }
    }
}

module.exports = middleware;