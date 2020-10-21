const Joi = require('joi');

const insertOperationSchema = Joi.object({
    date: Joi.date(),
    quantity: Joi.number(),
    product_name: Joi.string(),
    maker: Joi.string(),
    comment: Joi.string(),
    operation_type_id: Joi.number().integer().required(),
    board_id: Joi.number().integer().required()
});

const updateOperationSchema = Joi.object({
    date: Joi.date(),
    quantity: Joi.number(),
    product_name: Joi.string(),
    maker: Joi.string(),
    comment: Joi.string(),
    operation_type_id: Joi.number().integer(),
    board_id: Joi.number().integer()
});

module.exports = {insertOperationSchema,updateOperationSchema};