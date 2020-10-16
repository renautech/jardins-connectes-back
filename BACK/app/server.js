const app = require('express')();
const port = process.env.PORT || 5555;






app.launch = () => {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });
}

module.exports = app;