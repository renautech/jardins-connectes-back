const { Router } = require('express');
const familyRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertFamilySchema, updateFamilySchema } = require('../schemas/familyschema');
const Family = require('../models/Family');

familyRouter.get('/families', cache, mainController.findAll(Family));
familyRouter.get('/families/family/:id', cache, mainController.findOne(Family));
familyRouter.post('/families', validateBody(insertFamilySchema), flush, mainController.insertOne(Family));
familyRouter.patch('/families/family/:id', validateBody(updateFamilySchema), flush, mainController.updateOne(Family));
familyRouter.delete('/families/family/:id', flush, mainController.deleteOne(Family));

module.exports = familyRouter;