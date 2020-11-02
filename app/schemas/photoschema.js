const Joi = require('joi');

const insertPhotoSchema = Joi.object({
    date: Joi.date(),
    board_id: Joi.number().integer().required()
});

const updatePhotoSchema = Joi.object({
    url: Joi.string(),
    date: Joi.date(),
    board_id: Joi.number().integer()
});

module.exports = { insertPhotoSchema, updatePhotoSchema };