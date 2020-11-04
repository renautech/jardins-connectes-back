const { Router } = require('express');
const varietyRouter = Router();
const mainController = require('../controllers/mainController');
const varietyController = require('../controllers/varietyController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertVarietySchema, updateVarietySchema } = require('../schemas/varietyschema');
const Variety = require('../models/Variety');
const upload = require('../services/upload');
const {isAdmin,isAuthentificate} = require('../services/session');

// Prefix : /varieties
varietyRouter.get('/', isAuthentificate, cache, mainController.findAll(Variety));
varietyRouter.get('/variety/:id', isAuthentificate, cache, mainController.findOne(Variety));
varietyRouter.post('/', isAdmin, upload, validateBody(insertVarietySchema), flush, varietyController.insert);
varietyRouter.patch('/variety/:id', isAdmin, upload, validateBody(updateVarietySchema), flush, mainController.updateOne(Variety));
varietyRouter.delete('/variety/:id', isAdmin, flush, mainController.deleteOne(Variety));

// Specifics routes
varietyRouter.get('/families/family/:id', isAuthentificate, cache, varietyController.allVarietiesByFamily);

module.exports = varietyRouter;