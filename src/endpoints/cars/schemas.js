const Joi = require('joi');

const schemas = {
    create: Joi.object().keys({
        title: Joi.string().min(3).required(),
        registrationNumber: Joi.string().min(2).required(),
        vinNumber: Joi.string().min(6).required(),
        brand: Joi.string().min(3).required(),
        model: Joi.string().min(3).required(),
        productionYear: Joi.number().integer().required(),
        insertedDate: Joi.date().required(),
        tireSize: Joi.string().required(),
        exhaustGasStandard: Joi.string().required(),
        tachographOverview: Joi.date().required(),
        overviewCarDate: Joi.date().required(),
        whoCreated: Joi.string().required
    }),
    update: Joi.object().keys({
        title: Joi.string().min(3).required(),
        registrationNumber: Joi.string().min(2).required(),
        vinNumber: Joi.string().min(6).required(),
        brand: Joi.string().min(3).required(),
        model: Joi.string().min(3).required(),
        productionYear: Joi.number().integer().required(),
        insertedDate: Joi.date().required(),
        tireSize: Joi.string().required(),
        exhaustGasStandard: Joi.string().required(),
        tachographOverview: Joi.date().required(),
        overviewCarDate: Joi.date().required(),
        whoCreated: Joi.string().required
    }),
}

module.exports = schemas;