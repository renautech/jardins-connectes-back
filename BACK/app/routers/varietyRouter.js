const { Router } = require('express');
const varietyRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertVarietySchema, updateVarietySchema } = require('../schemas/varietyschema');
const Variety = require('../models/Variety');

varietyRouter.get('/varieties', cache, mainController.findAll(Variety));
varietyRouter.get('/varieties/variety/:id', cache, mainController.findOne(Variety));
varietyRouter.post('/varieties', validateBody(insertVarietySchema), flush, mainController.insertOne(Variety));
varietyRouter.patch('/varieties/variety/:id', validateBody(updateVarietySchema), flush, mainController.updateOne(Variety));
varietyRouter.delete('/varieties/variety/:id', flush, mainController.deleteOne(Variety));

module.exports = varietyRouter;