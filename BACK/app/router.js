const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const User = require('./models/User');

router.get('/users', mainController.findAll(User));
router.get('/users/user/:id', mainController.findOne(User));
router.post('/users', validateBody(insertUserSchema), mainController.insertOne(User));
router.patch('/users/user/:id', validateBody(updateUserSchema), mainController.updateOne(User));

module.exports = router;