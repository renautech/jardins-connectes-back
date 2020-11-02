const Board = require('../models/Board');

const boardController = {


    findAllBoardForConnectedUser: async (req,res) => {

        try {
            res.json(await Board.findAllByUser(req.session.user.id));
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }     
    },

    findOneBoardForConnectedUser: async (req,res) => {

        try {
            res.json(await Board.findOneByUser(req.session.user.id,req.params.id));
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
        
    },

    allEmptyBoardForConnectedUser: async (req,res) => {

        try {
            const boardsEmpty = await Board.findAllEmptyBoardByUser(req.session.user.id);
            res.json(boardsEmpty);   
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
           
    },

    findByFamilyForConnectedUser: async (req,res) => {

        try {
            const boards = await Board.findByFamilyByUser(req.session.user.id, req.params.id);
            res.json(boards);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    addNewBoardForConnectedUser: async (req,res) => {

        try {
            const newBoard = new Board(req.body);
            newBoard.user_id = req.session.user.id;
            await newBoard.save();            
            res.json(newBoard);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
        
    },

    DeleteBoardForConnectedUser: async (req,res) => {

        try {
            const deleteBoard = new Board(await Board.findOne(req.params.id));
            const boardDeleted = await deleteBoard.delete(req.session.user.id);
            if (boardDeleted.rowCount === 1) {
                res.json("Planche supprimé !");
            }
            else if (deleteBoard.user_id !== req.session.user.id) {
                res.json("Planche non supprimé !, cette planche ne vous appartient pas ! vilain !");
            }
            else {
                res.json("Planche non supprimé !");
            }

        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
        
    },

    updateBoardForConnectedUser: async (req,res) => {

        try {
            const oldData = new Board(await Board.findOne(req.params.id));
            const newData = new Board(req.body); 
            for(const prop in newData) {
                oldData[prop] = newData[prop];
        }
            oldData.save();
            res.json(`Changement effectué ! `);

        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    }

};

module.exports = boardController;