const { Router } = require('express');
const familyRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertFamilySchema, updateFamilySchema } = require('../schemas/familyschema');
const Family = require('../models/Family');

// Prefix : /families
familyRouter.get('/', cache, mainController.findAll(Family));
familyRouter.get('/family/:id', cache, mainController.findOne(Family));
familyRouter.post('/', validateBody(insertFamilySchema), flush, mainController.insertOne(Family));
familyRouter.patch('/family/:id', validateBody(updateFamilySchema), flush, mainController.updateOne(Family));
familyRouter.delete('/family/:id', flush, mainController.deleteOne(Family));

module.exports = familyRouter;