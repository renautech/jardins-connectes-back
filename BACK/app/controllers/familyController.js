const Family = require('../models/Family');

const familyController = {

    findWhereActiveBoardForConnectedUser: async (req, res) => {
        if (req.session.user) {
            console.log(req.session.user.id)
            res.json(await Family.findWhereActiveBoardsByUser(req.session.user.id));
        } else {
            res.json('Veuillez vous connecter avant d\'accéder à votre jardin');
        }
    }
    
}

module.exports = familyController;