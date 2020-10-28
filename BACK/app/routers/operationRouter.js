const { Router } = require('express');
const operationRouter = Router();
const mainController = require('../controllers/mainController');
const operationController = require('../controllers/operationController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertOperationSchema, updateOperationSchema } = require('../schemas/operation.schema');
const Operation = require('../models/Operation');
const {isAdmin} = require('../services/session');

// Prefix : /operations
operationRouter.get('/', isAdmin, cache, mainController.findAll(Operation));
operationRouter.get('/operation/:id', isAdmin, cache, mainController.findOne(Operation));
operationRouter.post('/', isAdmin, validateBody(insertOperationSchema), flush, mainController.insertOne(Operation));
operationRouter.patch('/operation/:id', isAdmin, validateBody(updateOperationSchema), flush, mainController.updateOne(Operation));
operationRouter.delete('/operation/:id', isAdmin, flush, mainController.deleteOne(Operation));

// Specifics routes
operationRouter.get('/boards/board/:id', cache, operationController.allOperationsByBoard);
operationRouter.get('/users/user', cache, operationController.allOperationsByUser);
operationRouter.post('/users/user', flush, validateBody(insertOperationSchema), operationController.addOperationForConnectedUser);
operationRouter.delete('/operation/:id/users/user', flush, operationController.deleteOperationForConnectedUser);
operationRouter.patch('/operation/:id/users/user', validateBody(updateOperationSchema), flush, operationController.updateOperationForConnectedUser);

module.exports = operationRouter;