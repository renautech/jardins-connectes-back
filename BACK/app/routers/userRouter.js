const { Router } = require('express');
const userRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertUserSchema, updateUserSchema } = require('../schemas/userschema');
const User = require('../models/User');
const userController = require('../controllers/userController');
const {isAdmin} = require('../services/session');

// Prefix : /users 
userRouter.get('/', isAdmin, cache, mainController.findAll(User));
userRouter.get('/user/:id', isAdmin, cache, mainController.findOne(User));
userRouter.post('/', isAdmin, validateBody(insertUserSchema), flush, userController.signup);
userRouter.patch('/user/:id', isAdmin, validateBody(updateUserSchema), flush,mainController.updateOne(User));
userRouter.delete('/user/:id', isAdmin, flush, mainController.deleteOne(User));

module.exports = userRouter;