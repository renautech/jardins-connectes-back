const { Router } = require('express');
const operationTypeRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertOperationTypeSchema, updateOperationTypeSchema } = require('../schemas/operationtypeschema');
const Operation_type = require('../models/Operation_type');

operationTypeRouter.get('/operation_types', cache, mainController.findAll(Operation_type));
operationTypeRouter.get('/operation_types/operation_type/:id', cache, mainController.findOne(Operation_type));
operationTypeRouter.post('/operation_types', validateBody(insertOperationTypeSchema), flush, mainController.insertOne(Operation_type));
operationTypeRouter.patch('/operation_types/operation_type/:id', validateBody(updateOperationTypeSchema), flush, mainController.updateOne(Operation_type));
operationTypeRouter.delete('/operation_types/operation_type/:id', flush, mainController.deleteOne(Operation_type));

module.exports = operationTypeRouter;