const { Router } = require('express');
const photoRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertPhotoSchema, updatePhotoSchema } = require('../schemas/photoschema');
const Photo = require('../models/Photo');

// Prefix : /photos
photoRouter.get('/', cache, mainController.findAll(Photo));
photoRouter.get('/photo/:id', cache, mainController.findOne(Photo));
photoRouter.post('/', validateBody(insertPhotoSchema), flush, mainController.insertOne(Photo));
photoRouter.patch('/photo/:id', validateBody(updatePhotoSchema), flush,mainController.updateOne(Photo));
photoRouter.delete('/photo/:id', flush, mainController.deleteOne(Photo));

module.exports = photoRouter;