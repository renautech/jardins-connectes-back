const { Router } = require('express');
const photoRouter = Router();
const mainController = require('../controllers/mainController');
const photoController = require('../controllers/photoController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertPhotoSchema, updatePhotoSchema } = require('../schemas/photoschema');
const Photo = require('../models/Photo');
const upload = require('../services/upload');
const {isAdmin} = require('../services/session');

// Prefix : /photos
photoRouter.get('/', isAdmin, cache, mainController.findAll(Photo));    //isAdmin ??
photoRouter.get('/photo/:id', cache, mainController.findOne(Photo));    //isAdmin ??
photoRouter.post('/', isAdmin, upload, validateBody(insertPhotoSchema), flush, photoController.insert);
photoRouter.patch('/photo/:id', isAdmin, validateBody(updatePhotoSchema), flush,mainController.updateOne(Photo));
photoRouter.delete('/photo/:id', isAdmin, flush, mainController.deleteOne(Photo));

// Connected Routes
photoRouter.get('/photo/:id/users/user', cache, photoController.findOneForUserConnected);
photoRouter.get('/users/user', cache, photoController.findAllForUserConnected);

module.exports = photoRouter;