const Variety = require('../models/Variety');

const varietyController = {

    allVarietiesByFamily: async (req,res) => {

        const varieties = await Variety.findAllByFamily(req.params.id);
        res.json(varieties);
    }
    
};

module.exports = varietyController;