const Operation = require('../models/Operation');

const operationController = {


    allOperationsByBoard: async (req,res) => {

        const operations = await Operation.findAllByBoard(req.params.id);
        res.json(operations);
    }
    
};

module.exports = operationController;