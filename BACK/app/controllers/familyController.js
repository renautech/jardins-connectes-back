const Family = require('../models/Family');

const familyController = {

    findWhereVoidBoardForConnectedUser: async (req, res) => {
        if (req.session.user) {
            res.json(await Family.findWhereVoidBoardByUser(req.session.user.id));
        } else {
            res.json('Veuillez vous connecter avant d\'accéder à votre jardin');
        }
    }
    
}

module.exports = familyController;