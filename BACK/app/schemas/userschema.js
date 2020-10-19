const Joi = require('joi');

const userschema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    street_name: Joi.string(),
    town: Joi.string(),
    postcode: Joi.number().integer().pattern(new RegExp('0[1-9][0-9]{3}$|^[1-9][0-9]{4}$|^2[A,B][0-9]{3}$')),
    department: Joi.string().required(),
    country: Joi.string().required(),
    email: Joi.email({minDomainSegments: 2, tlds: { allow: ['com','net']}}).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    profile_picture: Joi.string().max(200)
});

module.exports = userschema;

