const Operation = require('../models/Operation');
const Board = require('../models/Board');

const operationController = {


    allOperationsByBoard: async (req,res) => {

        try {
            const operations = await Operation.findAllByBoard(req.params.id);
            res.json(operations);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    allOperationsByUser: async (req,res) => {

        try {
            const operations = await Operation.findAllForUser(req.session.user.id);
            res.json(operations);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
        
    },

    addOperationForConnectedUser: async (req,res) => {

        try {
            const boardTest = Board.findOneByUser(req.session.user.id,req.body.board_id);
            if(!req.body.board_id === boardTest.id) {
                throw new Error("Vous ne pouvez pas ajouter cette operation, cette planche ne vous appartient probablement pas !");
            }
            const newOperation = new Operation(req.body);
            await newOperation.save();
            if(!newOperation.id){
                throw new Error("l'insertion a échoué !")
            }
            res.json(newOperation);
            } catch (err) {
                res.json({
                    message: err.message,
                    state: false
                });
            }
    },

    deleteOperationForConnectedUser: async (req,res) => {

        try {
            const operation = new Operation(await Operation.findOne(req.params.id));
            const newOperation = await Operation.findOneByUser(operation.id,req.session.user.id);
            if(!newOperation || (newOperation === [] )) {
                throw new Error("Vous ne pouvez pas supprimé cette opération ! elle ne vous appartient pas ou n'existe pas!");
            }
            else {
                await operation.delete();
                res.json({
                    message: "Opération supprimé !",
                    state: true
                });
            }
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    updateOperationForConnectedUser: async (req,res) => {


        try {
            const operation = new Operation(await Operation.findOne(req.params.id));
            const operationTest = await Operation.findOneByUser(operation.id,req.session.user.id);
            if(!operationTest || (operationTest === [])) {
                throw new Error("Vous ne pouvez pas modifié cette operation ! elle ne vous appartient pas ou n'existe pas !")
            }
            const newOperation = new Operation(req.body);
            for(let prop in newOperation){
                operation[prop] = newOperation[prop];
            }
            await operation.save();
            res.json(operation);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
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