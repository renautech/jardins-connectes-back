const Joi = require('joi');

const insertBoardSchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().required(),
    variety_id: Joi.number().integer().min(1).required(),
    user_id: Joi.number().integer().min(1).required()
});

module.exports = { insertBoardSchema };