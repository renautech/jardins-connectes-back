const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {cache, flush} = require('./cache/cacheStrategy');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const { insertOperationTypeSchema, updateOperationTypeSchema } = require('./schemas/operationtypeschema');
const User = require('./models/User');
const Operation_type = require('./models/Operation_type');

router.get('/users',cache , mainController.findAll(User));
router.get('/users/user/:id',cache , mainController.findOne(User));
router.post('/users', validateBody(insertUserSchema), flush, mainController.insertOne(User));
router.patch('/users/user/:id', validateBody(updateUserSchema),flush ,mainController.updateOne(User));
router.delete('/users/user/:id',flush, mainController.deleteOne(User));

router.get('/operation_types', cache, mainController.findAll(Operation_type));
router.get('/operation_types/operation_type/:id', cache, mainController.findOne(Operation_type));
router.post('/operation_types', validateBody(insertOperationTypeSchema), flush, mainController.insertOne(Operation_type));
router.patch('/operation_types/operation_type/:id', validateBody(updateOperationTypeSchema), flush, mainController.updateOne(Operation_type));
router.delete('/operation_types/operation_type/:id', flush, mainController.deleteOne(Operation_type));


module.exports = router;