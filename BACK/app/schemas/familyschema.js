const Joi = require('joi');

const insertFamilySchema = Joi.object({
    name: Joi.string().required(),
    picture: Joi.string(),
    description: Joi.string()
});

const updateFamilySchema = Joi.object({
    name: Joi.string(),
    picture: Joi.string(),
    description: Joi.string()
});

module.exports = {insertFamilySchema,updateFamilySchema};