const validateQuery = (schema) => (req,res,next) => {
    const validatedQuery = schema.validate(req.query);

    if (validatedQuery.error) {
        
        res.status(400).json(validatedQuery.error);

    } else {
        next();
    }
};

const validateBody = (schema) => (req,res,next) => {
    const validatedBody = schema.validate(req.body);

    if (validatedBody.error) {
        
        res.status(400).json(validatedBody.error);


    } else {
        next();
    }
};

/*schema.validate({ username: 'abc', birth_year: 1994 });
// -> { value: { username: 'abc', birth_year: 1994 } }

schema.validate({});
// -> { value: {}, error: '"username" is required' }*/

module.exports = {
    validateBody,
    validateQuery
};