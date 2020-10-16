require('dotenv').config();
const app = require('express')();
const router = require('./router');

const port = process.env.PORT || 5555;

app.use('/v1', router);

app.launch = () => {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });
}

module.exports = app;