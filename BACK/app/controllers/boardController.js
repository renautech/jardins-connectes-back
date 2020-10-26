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
            
    }
    
};

module.exports = boardController;