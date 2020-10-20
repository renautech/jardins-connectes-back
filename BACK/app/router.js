const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {cache, flush} = require('./cache/cacheStrategy');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const User = require('./models/User');

router.get('/users',cache , mainController.findAll(User));
router.get('/users/user/:id',cache , mainController.findOne(User));
router.post('/users', validateBody(insertUserSchema), flush, mainController.insertOne(User));
router.patch('/users/user/:id', validateBody(updateUserSchema),flush ,mainController.updateOne(User));
router.delete('/users/user/:id',flush, mainController.deleteOne(User));


module.exports = router;