const Joi = require('joi');

const insertPhotoSchema = Joi.object({
    date: Joi.date(),
    image: Joi.any(),
    board_id: Joi.number().integer().required()
});

const updatePhotoSchema = Joi.object({
    image: Joi.any(),
    date: Joi.date(),
    board_id: Joi.number().integer()
});

module.exports = { insertPhotoSchema, updatePhotoSchema };