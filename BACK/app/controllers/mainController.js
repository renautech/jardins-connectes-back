

const mainController = {

    findAll: (model) => async (_,res) => {
    
        res.json(await model.findAll());
    },

    findOne: (model) => async (req,res) => {

        res.json(await model.findOne(req.params.id));
    }

}

module.exports = mainController;