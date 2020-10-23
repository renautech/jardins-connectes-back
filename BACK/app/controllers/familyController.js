const Family = require('../models/Family');

const familyController = {

    findWhereVoidBoardForConnectedUser: async (req, res) => {
        res.json(await Family.findWhereVoidBoardByUser(req.session.user.id));
    }
    
}

module.exports = familyController;