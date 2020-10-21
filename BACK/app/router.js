const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {cache, flush} = require('./cache/cacheStrategy');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const {insertFamilySchema,updateFamilySchema} = require('./schemas/familyschema');
const {insertVarietySchema,updateVarietySchema} = require('./schemas/varietyschema');
const {insertOperationSchema,updateOperationSchema} = require('./schemas/operation.schema');
const User = require('./models/User');
const Family = require('./models/Family');
const Variety = require('./models/Variety');
const Operation = require('./models/Operation');

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

router.get('/varieties',cache , mainController.findAll(Variety));
router.get('/varieties/variety/:id',cache , mainController.findOne(Variety));
router.post('/varieties', validateBody(insertVarietySchema), flush, mainController.insertOne(Variety));
router.patch('/varieties/variety/:id', validateBody(updateVarietySchema),flush ,mainController.updateOne(Variety));
router.delete('/varieties/variety/:id',flush, mainController.deleteOne(Variety));

router.get('/operations',cache , mainController.findAll(Operation));
router.get('/operations/operation/:id',cache , mainController.findOne(Operation));
router.post('/operations', validateBody(insertOperationSchema), flush, mainController.insertOne(Operation));
router.patch('/operations/operation/:id', validateBody(updateOperationSchema),flush ,mainController.updateOne(Operation));
router.delete('/operations/operation/:id',flush, mainController.deleteOne(Operation));




module.exports = router;