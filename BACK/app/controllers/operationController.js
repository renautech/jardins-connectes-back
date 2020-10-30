const Operation = require('../models/Operation');
const Board = require('../models/Board');

const operationController = {


    allOperationsByBoard: async (req,res) => {

        const operations = await Operation.findAllByBoard(req.params.id);
        res.json(operations);
    },

    allOperationsByUser: async (req,res) => {

        const operations = await Operation.findAllForUser(req.session.user.id);
        console.log(operations);
        res.status(200).json(operations);
    },

    addOperationForConnectedUser: async (req,res) => {

        const boardTest = Board.findOneByUser(req.session.user.id,req.body.board_id);
        if(req.body.board_id === boardTest.board_id) {
            const newOperation = new Operation(req.body);
            await newOperation.save();
            res.json("operation sauvegardé !");
        } 
        else{
            res.json("Vous ne pouvez pas supprimé cette operation, ")
        }
        
        console.log("ma new operation ! ",newOperation);
        
        //}
        //else {
        //    res.status(400).json("Vous ne pouvez modifier seulement les planches vous appartenant !");
        //}
    },

    deleteOperationForConnectedUser: async (req,res) => {


        const allBoards = await Board.findAllForUser(req.session.user.id);
        const operation = new Operation(await Operation.findOne(req.params.id));
        const board = await Board.findOneByUser(req.session.user.id,operation.board_id);
        if(!board || (board === [] )) {
            res.json("Vous ne pouvez pas supprimé cette planche ! elle ne vous appartient pas ou n'existe pas!");
        }
        else {
            await operation.delete();
            res.status(200).json("Operation supprimé !");
        }
    },

    updateOperationForConnectedUser: async (req,res) => {


        // if() securite pour que l'on ne puisse changer seulement les planches nous appartenant
        const operation = new Operation(await Operation.findOne(req.params.id));
        const newOperation = new Operation(req.body);
        for(let prop in newOperation){
            operation[prop] = newOperation[prop];
        }
        await operation.save();
        res.status(200).json("Operation modifié !");
    },

    findByFamillyForConnectedUser : async (req, res) => {
        try {
            const operations = await Operation.findByUserByFamily(req.session.user.id, req.params.id);
            res.json(operations);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    }
    
};

module.exports = operationController;