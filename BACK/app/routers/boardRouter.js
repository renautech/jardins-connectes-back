const { Router } = require('express');
const boardRouter = Router();
const mainController = require('../controllers/mainController');
const { validateBody } = require('../services/validator');
const { cache, flush } = require('../cache/cacheStrategy');
const { insertBoardSchema, updateBoardSchema }= require('../schemas/boardschema');
const Board = require('../models/Board');

boardRouter.get('/boards', cache, mainController.findAll(Board));
boardRouter.get('/boards/board/:id', cache, mainController.findOne(Board));
boardRouter.post('/boards', validateBody(insertBoardSchema), flush, mainController.insertOne(Board));
boardRouter.patch('/boards/board/:id', validateBody(updateBoardSchema), flush, mainController.updateOne(Board));
boardRouter.delete('/boards/board/:id', flush, mainController.deleteOne(Board));

module.exports = boardRouter;