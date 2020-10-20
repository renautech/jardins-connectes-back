const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {cache, flush} = require('./cache/cacheStrategy');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const {insertFamilySchema,updateFamilySchema} = require('./schemas/userFamily');
const User = require('./models/User');
const Family = require('./models/Family');

router.get('/users',cache , mainController.findAll(User));
router.get('/users/user/:id',cache , mainController.findOne(User));
router.post('/users', validateBody(insertUserSchema), flush, mainController.insertOne(User));
router.patch('/users/user/:id', validateBody(updateUserSchema),flush ,mainController.updateOne(User));
router.delete('/users/user/:id',flush, mainController.deleteOne(User));

router.get('/families',cache , mainController.findAll(Family));
router.get('/families/family/:id',cache , mainController.findOne(Family));
router.post('/families', validateBody(insertFamilySchema), flush, mainController.insertOne(Family));
router.patch('/families/family/:id', validateBody(updateFamilySchema),flush ,mainController.updateOne(Family));
router.delete('/families/family/:id',flush, mainController.deleteOne(Family));


module.exports = router;