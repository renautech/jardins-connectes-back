const { Router } = require('express');
const operationRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertOperationSchema, updateOperationSchema } = require('../schemas/operation.schema');
const Operation = require('../models/Operation');

// Prefix : /operations
operationRouter.get('/', cache, mainController.findAll(Operation));
operationRouter.get('/operation/:id', cache, mainController.findOne(Operation));
operationRouter.post('/', validateBody(insertOperationSchema), flush, mainController.insertOne(Operation));
operationRouter.patch('/operation/:id', validateBody(updateOperationSchema), flush, mainController.updateOne(Operation));
operationRouter.delete('/operation/:id', flush, mainController.deleteOne(Operation));

module.exports = operationRouter;