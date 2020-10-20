const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');
const {validateQuery,validateBody} = require('./services/validator');
const {cache, flush} = require('./cache/cacheStrategy');
const {insertUserSchema,updateUserSchema} = require('./schemas/userschema');
const { insertBoardSchema, updateBoardSchema }= require('./schemas/boardschema');
const Board = require('./models/Board');
const User = require('./models/User');

router.get('/users',cache , mainController.findAll(User));
router.get('/users/user/:id',cache , mainController.findOne(User));
router.post('/users', validateBody(insertUserSchema), flush, mainController.insertOne(User));
router.patch('/users/user/:id', validateBody(updateUserSchema),flush ,mainController.updateOne(User));
router.delete('/users/user/:id',flush, mainController.deleteOne(User));

router.get('/boards', cache, mainController.findAll(Board));
router.get('/boards/board/:id', cache, mainController.findOne(Board));
router.post('/boards', validateBody(insertBoardSchema), flush, mainController.insertOne(Board));
router.patch('/boards/board/:id', validateBody(updateBoardSchema), flush, mainController.updateOne(Board));
router.delete('/boards/board/:id', flush, mainController.deleteOne(Board));

module.exports = router;