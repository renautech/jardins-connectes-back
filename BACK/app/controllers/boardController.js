const Board = require('../models/Board');

const boardController = {



    findAllBoardForConnectedUser: async (req,res) => {

        if(req.session.user) {
            res.json(await Board.findAllByUser(req.session.user.id));
        }else {
            res.json("Veuillez vous connecter");
        }
        
    },

    allEmptyBoardForConnectedUser: async (req,res) => {

        if(req.session.user){
            const boardsEmpty = await Board.findAllEmptyBoardByUser(req.session.user.id);
            res.json(boardsEmpty);
        }
        else {
            res.json("Veuillez vous connecter");
        }
            
    },

    findByFamilyForConnectedUser: async (req,res) => {

        if(req.session.user){
            const boards = await Board.findByFamilyByUser(req.session.user.id, req.params.id);
            res.json(boards);
        }
        else {
            res.json("Veuillez vous connecter");
        } 
    },

    addNewBoardForConnectedUser: async (req,res) => {

        if(req.session.user){
            const newBoard = new Board(req.body);
            newBoard.user_id = req.session.user.id;
            await newBoard.save();
            res.json(newBoard);
        }
        else {
            res.json("Veuillez vous connecter");
        }
    },

    DeleteBoardForConnectedUser: async (req,res) => {

        if(req.session.user){
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
        }
        else {
            res.json("Veuillez vous connecter");
        }
    }
    
};

module.exports = boardController;