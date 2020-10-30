const Board = require('../models/Board');

const boardController = {


    findAllBoardForConnectedUser: async (req,res) => {

        res.json(await Board.findAllByUser(req.session.user.id));
    },

    findOneBoardForConnectedUser: async (req,res) => {

        res.json(await Board.findOneByUser(req.session.user.id,req.params.id));
    },

    allEmptyBoardForConnectedUser: async (req,res) => {

        const boardsEmpty = await Board.findAllEmptyBoardByUser(req.session.user.id);
        res.json(boardsEmpty);      
    },

    findByFamilyForConnectedUser: async (req,res) => {

        const boards = await Board.findByFamilyByUser(req.session.user.id, req.params.id);
        res.json(boards);
    },

    addNewBoardForConnectedUser: async (req,res) => {

        const newBoard = new Board(req.body);
        newBoard.user_id = req.session.user.id;
        await newBoard.save();            
        res.json(newBoard);
    },

    DeleteBoardForConnectedUser: async (req,res) => {

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
    },

    updateBoardForConnectedUser: async (req,res) => {

        const oldData = new Board(await Board.findOne(req.params.id));
        const newData = new Board(req.body); 
        for(const prop in newData) {
            oldData[prop] = newData[prop];
        }
        oldData.save();
        res.json(`Changement effectué ! `);
    }

};

module.exports = boardController;