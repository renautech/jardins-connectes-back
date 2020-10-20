const Joi = require('joi');

const insertPhotoSchema = Joi.object({
    url: Joi.string().required(),
    date: Joi.date(),
    board_id: Joi.number().integer().required()
});

module.exports = { insertPhotoSchema };