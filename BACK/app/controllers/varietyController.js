const Variety = require('../models/Variety');

const varietyController = {

    allVarietiesByFamily: async (req,res) => {

        const varieties = await Variety.findAllByFamily(req.params.id);
        res.json(varieties);
    },

    insert: async (req,res) => {
        try {
            console.log("le req.body : ",req.body);
            console.log(" le req.file : ", req.file);
            //const photoObject = JSON.parse(req.body.photo);
            const variety = new Variety({
                name: req.body.name,
                picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` || '',
                description: req.body.description,
                family_id: req.body.family_id
            });
            res.status(200).send(variety);
            variety.save();
        } catch (err) {
            res.status(500).send({
                message: err
            });
        }
    }
    
};

module.exports = varietyController;