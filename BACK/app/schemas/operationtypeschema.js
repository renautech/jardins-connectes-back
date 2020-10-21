const Joi = require('joi');

const insertOperationTypeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
});

const updateOperationTypeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
});

module.exports = { insertOperationTypeSchema, updateOperationTypeSchema };