const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const User = require('./models/User');

router.get('/users', mainController.findAll(User));
router.get('/users/user/:id', mainController.findOne(User));

module.exports = router;