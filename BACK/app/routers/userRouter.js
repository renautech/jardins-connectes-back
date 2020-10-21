const { Router } = require('express');
const userRouter = Router();
const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertUserSchema,updateUserSchema } = require('../schemas/userschema');
const User = require('../models/User');

// CRUD 
userRouter.get('/users', cache, mainController.findAll(User));
userRouter.get('/users/user/:id', cache, mainController.findOne(User));
userRouter.post('/users', validateBody(insertUserSchema), flush, mainController.insertOne(User));
userRouter.patch('/users/user/:id', validateBody(updateUserSchema), flush,mainController.updateOne(User));
userRouter.delete('/users/user/:id', flush, mainController.deleteOne(User));

// Authentification
userRouter.post('/signup', validateBody(insertUserSchema), userController.signup);
userRouter.post('/signin', userController.signin);

module.exports = userRouter;