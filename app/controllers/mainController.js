

const mainController = {

    findAll: (model) => async (_,res) => {
        try {
            res.json(await model.findAll());
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    findOne: (model) => async (req,res) => {
        try {
            res.json(await model.findOne(req.params.id));
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        } 
    },

    insertOne: (model) => async (req,res) => {
        try {
            const newEntrance = new model(req.body);
            await newEntrance.save();
            res.json(newEntrance);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    updateOne: (model) => async (req,res) => {
        try {
            const toUpdate = await model.findOne(req.params.id);
            const modelUpdate = new model(toUpdate);
            for(const prop in req.body) {
                modelUpdate[prop] = req.body[prop];
            }
            await modelUpdate.save();
            res.json(modelUpdate);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
        
    },

    deleteOne: (model) => async (req,res) => {
        try {
            const toDelete = await model.findOne(req.params.id);
            const modelDelete = new model(toDelete);
            await modelDelete.delete();
            if (modelDelete.errorMessage) {
                throw new Error(modelDelete.errorMessage);
            }
            res.json({
                message: `L'Utilisateur ayant l'ID : ${req.params.id} a été supprimé`,
                state: true
            });
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }       
    },

    notFound: (req, res) => {
        res.status(404).json({
            message: "Cette route n'existe pas !",
            state: false
        });
    },

}

module.exports = mainController;