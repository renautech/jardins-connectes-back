const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const userschema = require('./schemas/userschema');
const User = require('./models/User');

router.get('/users', mainController.findAll(User));
router.get('/users/user/:id', mainController.findOne(User));
router.post('/users', validateBody(userschema), mainController.insertOne(User));

module.exports = router;