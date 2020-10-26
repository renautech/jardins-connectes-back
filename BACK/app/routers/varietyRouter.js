const { Router } = require('express');
const varietyRouter = Router();
const mainController = require('../controllers/mainController');
const varietyController = require('../controllers/varietyController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertVarietySchema, updateVarietySchema } = require('../schemas/varietyschema');
const Variety = require('../models/Variety');

// Prefix : /varieties
varietyRouter.get('/', cache, mainController.findAll(Variety));
varietyRouter.get('/variety/:id', cache, mainController.findOne(Variety));
varietyRouter.post('/', validateBody(insertVarietySchema), flush, mainController.insertOne(Variety));
varietyRouter.patch('/variety/:id', validateBody(updateVarietySchema), flush, mainController.updateOne(Variety));
varietyRouter.delete('/variety/:id', flush, mainController.deleteOne(Variety));

// Specifics routes
varietyRouter.get('/families/family/:id', cache, varietyController.allVarietiesByFamily);

module.exports = varietyRouter;