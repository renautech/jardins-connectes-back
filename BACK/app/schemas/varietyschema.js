const Joi = require('joi');

const insertVarietySchema = Joi.object({
    "name": Joi.string().required(),
    picture: Joi.string().allow(''),
    description: Joi.string().allow(''),
    family_id: Joi.number().integer().required()
});

const updateVarietySchema = Joi.object({
    "name": Joi.string(),
    picture: Joi.string(),
    description: Joi.string(),
    family_id: Joi.number().integer()
});

module.exports = {insertVarietySchema,updateVarietySchema};