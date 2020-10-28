const { Router } = require('express');
const boardRouter = Router();
const mainController = require('../controllers/mainController');
const boardController = require('../controllers/boardController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertBoardSchema, updateBoardSchema }= require('../schemas/boardschema');
const Board = require('../models/Board');
const {isAdmin} = require('../services/session');

// Prefix : /boards
boardRouter.get('/', isAdmin, cache, mainController.findAll(Board));
boardRouter.get('/board/:id', cache, mainController.findOne(Board));        // isAdmin ???
boardRouter.post('/', isAdmin, validateBody(insertBoardSchema), flush, mainController.insertOne(Board));
boardRouter.patch('/board/:id', isAdmin, validateBody(updateBoardSchema), flush, mainController.updateOne(Board));
boardRouter.delete('/board/:id', isAdmin, flush, mainController.deleteOne(Board));

// Specifics routes
boardRouter.get('/users/user',cache , boardController.findAllBoardForConnectedUser);
boardRouter.get('/empty/users/user', cache, boardController.allEmptyBoardForConnectedUser);
boardRouter.get('/families/family/:id/users/user', cache, boardController.findByFamilyForConnectedUser);

boardRouter.post('/users/user', flush, validateBody(insertBoardSchema), boardController.addNewBoardForConnectedUser);
boardRouter.delete('/board/:id/users/user', flush, boardController.DeleteBoardForConnectedUser);
boardRouter.patch('/board/:id/users/user', validateBody(updateBoardSchema), flush, boardController.updateBoardForConnectedUser);

module.exports = boardRouter;