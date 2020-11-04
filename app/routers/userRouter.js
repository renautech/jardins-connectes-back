const { Router } = require('express');
const userRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertUserSchema, updateUserSchema, updateFromSuperAdmin } = require('../schemas/userschema');
const User = require('../models/User');
const userController = require('../controllers/userController');
const upload = require('../services/upload');
const {isAdmin,isAuthentificate,isSuperAdmin} = require('../services/session');

// Prefix : /users 
userRouter.get('/', isAdmin, cache, mainController.findAll(User));
userRouter.get('/user/:id', isAdmin, cache, mainController.findOne(User));
userRouter.patch('/user/:id', isSuperAdmin, validateBody(updateFromSuperAdmin), flush,mainController.updateOne(User));
userRouter.delete('/user/:id', isAdmin, flush, userController.deleteFromAdmin);

// Connected routes
userRouter.get('/user', isAuthentificate, cache, userController.findConnected);
userRouter.delete('/user', isAuthentificate, flush, userController.deleteConnected);
userRouter.patch('/user', isAuthentificate, upload, validateBody(updateUserSchema), flush, userController.updateConnected);

module.exports = userRouter;