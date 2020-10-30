const { Router } = require('express');
const operationTypeRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertOperationTypeSchema, updateOperationTypeSchema } = require('../schemas/operationtypeschema');
const Operation_type = require('../models/Operation_type');
const {isAdmin,isAuthentificate} = require('../services/session');

// Prefix : /operation_types
operationTypeRouter.get('/', isAuthentificate, cache, mainController.findAll(Operation_type));
operationTypeRouter.get('/operation_type/:id', isAuthentificate, cache, mainController.findOne(Operation_type));
operationTypeRouter.post('/', isAdmin, validateBody(insertOperationTypeSchema), flush, mainController.insertOne(Operation_type));
operationTypeRouter.patch('/operation_type/:id', isAdmin, validateBody(updateOperationTypeSchema), flush, mainController.updateOne(Operation_type));
operationTypeRouter.delete('/operation_type/:id', isAdmin, flush, mainController.deleteOne(Operation_type));

module.exports = operationTypeRouter;