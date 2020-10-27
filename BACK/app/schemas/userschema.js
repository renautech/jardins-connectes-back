const Joi = require('joi');

const insertUserSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    street_name: Joi.string(),
    street_number: Joi.number(),
    town: Joi.string(),
    postcode: Joi.string().pattern(new RegExp('0[1-9][0-9]{3}$|^[1-9][0-9]{4}$|^2[A,B][0-9]{3}$')),
    department: Joi.string().required(),
    country: Joi.string().required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com','net']}}).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    profile_picture: Joi.string().max(200),
    role: Joi.string()
});

const updateUserSchema = Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    street_name: Joi.string(),
    street_number: Joi.number(),
    town: Joi.string(),
    postcode: Joi.string().pattern(new RegExp('0[1-9][0-9]{3}$|^[1-9][0-9]{4}$|^2[A,B][0-9]{3}$')),
    department: Joi.string(),
    country: Joi.string(),
    email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com','net']}}),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    nickname: Joi.string().alphanum().min(3).max(30),
    profile_picture: Joi.string().max(200)
});

const signinSchema = Joi.object({
    email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com','net']}}).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

module.exports = {
    insertUserSchema, 
    updateUserSchema, 
    signinSchema 
};

