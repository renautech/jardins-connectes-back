const Joi = require('joi');

const insertOperationTypeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    picture: Joi.string().allow('')
});

const updateOperationTypeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    picture: Joi.string()
});

module.exports = { insertOperationTypeSchema, updateOperationTypeSchema };