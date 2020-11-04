const Joi = require('joi');

const insertFamilySchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.any().required(),
    description: Joi.string().allow('')
});

const updateFamilySchema = Joi.object({
    name: Joi.string(),
    image: Joi.any(),
    description: Joi.string()
});

module.exports = {insertFamilySchema,updateFamilySchema};