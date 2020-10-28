const { Router } = require('express');
const userRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertUserSchema, updateUserSchema } = require('../schemas/userschema');
const User = require('../models/User');
const userController = require('../controllers/userController');

// Prefix : /users 
userRouter.get('/', cache, mainController.findAll(User));
userRouter.get('/user/:id', cache, mainController.findOne(User));
//userRouter.post('/', validateBody(insertUserSchema), flush, userController.signup);
userRouter.patch('/user/:id', validateBody(updateUserSchema), flush,mainController.updateOne(User));
userRouter.delete('/user/:id', flush, mainController.deleteOne(User));

// Specific routes
userRouter.get('/user', cache, userController.findConnected);

module.exports = userRouter;