const { Router } = require('express');
const db = require('./database');
const router = Router();

router.get('/test', async (req, res) => {
    const testSql = (await db.query(`SELECT * FROM "user";`)).rows;
    res.json(testSql);
});

module.exports = router;