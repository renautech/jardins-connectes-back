

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
        await modelUpdate.save();
        res.json(modelUpdate);
    },

    deleteOne: (model) => async (req,res) => {
        const toDelete = await model.findOne(req.params.id);
        const modelDelete = new model(toDelete);
        await modelDelete.delete();
        if (modelDelete.errorMessage) {
            res.status(400).json(modelDelete.errorMessage);
        } else {
        res.json(`L'Utilisateur ayant l'ID : ${req.params.id} a été supprimé`);
        }
    }

}

module.exports = mainController;