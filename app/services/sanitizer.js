const sanitizeHtml = require('sanitize-html');

const sanitize = (req, _, next) => {
    if (req.params) {
        for (const prop in req.params) {
            req.params[prop] = sanitizeHtml(req.params[prop]);
        }
    }
    if (req.query) {
        for (const prop in req.query) {
            req.query[prop] = sanitizeHtml(req.query[prop]);
        }
    }
    if (req.body) {
        for (const prop in req.body) {
            req.body[prop] = sanitizeHtml(req.body[prop]);
        }
    }
    next();
}

module.exports = { sanitize };