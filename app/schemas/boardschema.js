const Joi = require('joi');

const insertBoardSchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().required(),
    //variety_id: Joi.number().integer().min(1).required(),
    variety_id: Joi.number().integer().min(1),
    user_id: Joi.number().integer().min(1)
});

const updateBoardSchema = Joi.object({
    name: Joi.string(),
    active: Joi.boolean(),
    variety_id: Joi.number().integer().min(1)
});

module.exports = { insertBoardSchema, updateBoardSchema };