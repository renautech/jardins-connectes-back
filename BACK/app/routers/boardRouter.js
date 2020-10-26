const { Router } = require('express');
const boardRouter = Router();
const mainController = require('../controllers/mainController');
const boardController = require('../controllers/boardController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertBoardSchema, updateBoardSchema }= require('../schemas/boardschema');
const Board = require('../models/Board');

// Prefix : /boards
boardRouter.get('/', cache, mainController.findAll(Board));
boardRouter.get('/board/:id', cache, mainController.findOne(Board));
boardRouter.post('/', validateBody(insertBoardSchema), flush, mainController.insertOne(Board));
boardRouter.patch('/board/:id', validateBody(updateBoardSchema), flush, mainController.updateOne(Board));
boardRouter.delete('/board/:id', flush, mainController.deleteOne(Board));

// Specifics routes
boardRouter.get('/users/user',cache , boardController.findAllBoardForConnectedUser);
boardRouter.get('/empty', cache, boardController.allEmptyBoardForConnectedUser);
boardRouter.get('/families/family/:id/users/user', cache, boardController.findByFamilyForConnectedUser);

module.exports = boardRouter;