

const mainController = {

    findAll: (model) => async (_,res) => {
    
        res.json(await model.findAll());
    },

    findOne: (model) => async (req,res) => {

        res.json(await model.findOne(req.params.id));
    },

    insertOne: (model) => async (req,res) => {

        const newEntrance = new model(req.body);
        console.log(newEntrance);
        await newEntrance.save();
        res.json(newEntrance);
    }

}

module.exports = mainController;