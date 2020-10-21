const { Router } = require('express');
const operationRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertOperationSchema, updateOperationSchema } = require('../schemas/operation.schema');
const Operation = require('../models/Operation');

operationRouter.get('/operations', cache, mainController.findAll(Operation));
operationRouter.get('/operations/operation/:id', cache, mainController.findOne(Operation));
operationRouter.post('/operations', validateBody(insertOperationSchema), flush, mainController.insertOne(Operation));
operationRouter.patch('/operations/operation/:id', validateBody(updateOperationSchema), flush, mainController.updateOne(Operation));
operationRouter.delete('/operations/operation/:id', flush, mainController.deleteOne(Operation));

module.exports = operationRouter;