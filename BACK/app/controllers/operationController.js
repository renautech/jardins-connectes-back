const Operation = require('../models/Operation');

const operationController = {


    allOperationsByBoard: async (req,res) => {

        const operations = await Operation.findAllByBoard(req.params.id);
        res.json(operations);
    },

    allOperationsByUser: async (req,res) => {

        if(req.session.user) {
            const operations = await Operation.findAllForUser(req.session.user.id);
            console.log(operations);
            res.status(200).json(operations);
        }
        else {
            res.json("Vous n'êtes pas connecté !");
        }
    },

    addOperationForConnectedUser: async (req,res) => {

        if(req.session.user) {
            // sécurité BACK supplémentaire pour que l'on ne puisse changer seulement les planches nous appartenant
            //if(req.session.user.id === board_id) {
            const newOperation = new Operation(req.body);
            console.log("ma new operation ! ",newOperation);
            await newOperation.save();
            res.json("operation sauvegardé !");
            //}
            //else {
            //    res.status(400).json("Vous ne pouvez modifier seulement les planches vous appartenant !");
            //}
        }
        else {
            res.status(403).json("Vous n'êtes pas connecté !");
        }
    },

    deleteOperationForConnectedUser: async (req,res) => {

        if(req.session.user) {

            const operation = new Operation(await Operation.findOne(req.params.id));
            await operation.delete();
            res.status(200).json("Operation supprimé !");
        }
        else {
            res.status(403).json("Vous n'êtes pas connecté !");
        }
    },

    updateOperationForConnectedUser: async (req,res) => {

            if(req.session.user) {

                const operation = new Operation(await Operation.findOne(req.params.id));
                const newOperation = new Operation(req.body);
                for(let prop in newOperation){
                    operation[prop] = newOperation[prop];
                }
                await operation.save();
                res.status(200).json("Operation modifié !");
            }
            else {
                res.status(403).json("Vous n'êtes pas connecté :");
            }
    }
    
};

module.exports = operationController;