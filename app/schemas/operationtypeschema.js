const Joi = require('joi');

const insertOperationTypeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    image: Joi.any(),
});

const updateOperationTypeSchema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    image: Joi.any()
});

module.exports = { insertOperationTypeSchema, updateOperationTypeSchema };