const { Router } = require('express');
const photoRouter = Router();
const mainController = require('../controllers/mainController');
const photoController = require('../controllers/photoController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertPhotoSchema, updatePhotoSchema } = require('../schemas/photoschema');
const { uploadSchema } = require('../schemas/uploadSchema');
const Photo = require('../models/Photo');
const upload = require('../services/upload');
const {isAdmin,isAuthentificate} = require('../services/session');

// Prefix : /photos
photoRouter.get('/', isAdmin, cache, mainController.findAll(Photo));
photoRouter.get('/photo/:id', isAdmin, cache, mainController.findOne(Photo));
photoRouter.post('/', isAdmin, upload, validateBody(insertPhotoSchema, uploadSchema), flush, photoController.insert);
photoRouter.patch('/photo/:id', isAdmin, upload, validateBody(updatePhotoSchema, uploadSchema), flush, photoController.update);
photoRouter.delete('/photo/:id', isAdmin, flush, mainController.deleteOne(Photo));

// Connected Routes
photoRouter.get('/photo/:id/users/user', isAuthentificate, cache, photoController.findOneForUserConnected);
photoRouter.get('/users/user', isAuthentificate, cache, photoController.findAllForUserConnected);

module.exports = photoRouter;