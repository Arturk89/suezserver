const Joi = require('joi');

const schemas = {
    create: Joi.object().keys({
        name: Joi.string().min(3).required(),
        lastname: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(5).required(),
        login: Joi.string().min(3).required(),
        permission: Joi.number().integer().min(0).max(1),
        isActive: Joi.number().integer().min(0).max(1),
        createdAt: Joi.date().required()
    })
}

module.exports = schemas;