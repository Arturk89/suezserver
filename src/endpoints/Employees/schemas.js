const Joi = require('joi');

const schemas = {
    create: Joi.object().keys({
        name: Joi.string().min(3).required(),
        surname: Joi.string().min(3).required(),
        telephone: Joi.string().min(6).required(),
        createdAt: Joi.date().required(),
        whoCreated: Joi.string().required(),
        whoUpdated: Joi.string().required()
    }),
    update: Joi.object().keys({
        name: Joi.string().min(3).required(),
        surname: Joi.string().min(3).required(),
        telephone: Joi.string().min(6).required(),
        createdAt: Joi.date().required(),
        whoCreated: Joi.string().required(),
        whoUpdated: Joi.string().required()
    }),
}

module.exports = schemas;