const { Router } = require('express');
const familyRouter = Router();
const mainController = require('../controllers/mainController');
const familyController = require('../controllers/familyController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertFamilySchema, updateFamilySchema } = require('../schemas/familyschema');
const Family = require('../models/Family');
const upload = require('../services/upload');
const {isAdmin} = require('../services/session');

// Prefix : /families
familyRouter.get('/', cache, mainController.findAll(Family));
familyRouter.get('/family/:id', cache, mainController.findOne(Family));
familyRouter.post('/', isAdmin, upload, validateBody(insertFamilySchema), flush, familyController.insert);
familyRouter.patch('/family/:id', isAdmin, validateBody(updateFamilySchema), flush, mainController.updateOne(Family));
familyRouter.delete('/family/:id', isAdmin, flush, mainController.deleteOne(Family));

// Specifics routes
familyRouter.get('/user/connected', cache, familyController.findWhereActiveBoardForConnectedUser);

module.exports = familyRouter;