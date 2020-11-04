const { Router } = require('express');
const operationTypeRouter = Router();
const mainController = require('../controllers/mainController');
const operationTypeController = require('../controllers/operationTypeController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertOperationTypeSchema, updateOperationTypeSchema } = require('../schemas/operationtypeschema');
const { uploadSchema } = require('../schemas/uploadSchema');
const Operation_type = require('../models/Operation_type');
const upload = require('../services/upload');
const {isAdmin,isAuthentificate} = require('../services/session');

// Prefix : /operation_types
operationTypeRouter.get('/', isAuthentificate, cache, mainController.findAll(Operation_type));
operationTypeRouter.get('/operation_type/:id', isAuthentificate, cache, mainController.findOne(Operation_type));
operationTypeRouter.post('/', isAdmin, upload, validateBody(insertOperationTypeSchema, uploadSchema), flush, operationTypeController.insert);
operationTypeRouter.patch('/operation_type/:id', isAdmin, upload, validateBody(updateOperationTypeSchema, uploadSchema), flush, operationTypeController.update);
operationTypeRouter.delete('/operation_type/:id', isAdmin, flush, mainController.deleteOne(Operation_type));

module.exports = operationTypeRouter;