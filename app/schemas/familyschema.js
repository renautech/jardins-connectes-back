const Joi = require('joi');

const insertFamilySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow('')
});

const updateFamilySchema = Joi.object({
    name: Joi.string(),
    description: Joi.string()
});

module.exports = {insertFamilySchema,updateFamilySchema};