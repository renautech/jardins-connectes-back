const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {cache, flush} = require('./cache/cacheStrategy');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const { insertPhotoSchema, updatePhotoSchema } = require('./schemas/photoschema');
const User = require('./models/User');
const Photo = require('./models/Photo');

router.get('/users',cache , mainController.findAll(User));
router.get('/users/user/:id',cache , mainController.findOne(User));
router.post('/users', validateBody(insertUserSchema), flush, mainController.insertOne(User));
router.patch('/users/user/:id', validateBody(updateUserSchema),flush ,mainController.updateOne(User));
router.delete('/users/user/:id',flush, mainController.deleteOne(User));

router.get('/photos', cache, mainController.findAll(Photo));
router.get('/photos/photo/:id',cache , mainController.findOne(Photo));
router.post('/photos', validateBody(insertPhotoSchema), flush, mainController.insertOne(Photo));
router.patch('/photos/photo/:id', validateBody(updatePhotoSchema),flush ,mainController.updateOne(Photo));

module.exports = router;