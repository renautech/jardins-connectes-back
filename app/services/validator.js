const fs = require('fs');

// a function that returns a middleware to allow this middleware to be modified depending on the schema 'schema'
// receives as a parameter
const validateQuery = (schema) => (req,res,next) => {
    const validatedQuery = schema.validate(req.query);

    if (validatedQuery.error) {
        
        res.status(400).json(validatedQuery.error);

    } else {
        next();
    }
};


const validateBody = (bodySchema, fileSchema) => (req,res,next) => {

    try {
        const validatedBody = bodySchema.validate(req.body);
        let validatedFile = false;
        if (fileSchema && req.file) {
            validatedFile = fileSchema.validate(req.file);
        }
        if (validatedBody.error) {
            throw new Error(validatedBody.error);
        }
        if (validatedFile.error) {
            throw new Error(validatedFile.error);
        }
        next();
    } catch (err) {
        if (req.file) {
            fs.unlink('public/images/' + req.file.filename, function(err) {
                if (err) throw err;
                console.log('file deleted');
            });
        }
        res.status(400).json(err.message);
    }
}
/*schema.validate({ username: 'abc', birth_year: 1994 });
// -> { value: { username: 'abc', birth_year: 1994 } }

schema.validate({});
// -> { value: {}, error: '"username" is required' }*/

module.exports = {
    validateBody,
    validateQuery
};