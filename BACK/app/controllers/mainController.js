

const mainController = {

    findAll: (model) => async (_,res) => {
    
        res.json(await model.findAll());
    },

    findOne: (model) => async (req,res) => {

        res.json(await model.findOne(req.params.id));
    },

    insertOne: (model) => async (req,res) => {

        const newEntrance = new model(req.body);
        await newEntrance.save();
        res.json(newEntrance);
    },

    updateOne: (model) => async (req,res) => {

        const toUpdate = await model.findOne(req.params.id);
        const modelUpdate = new model(toUpdate);
        for(const prop in req.body) {
            modelUpdate[prop] = req.body[prop];
        }
        modelUpdate.save();
        res.json(modelUpdate);
    }

}

module.exports = mainController;