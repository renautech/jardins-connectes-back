const Family = require('../models/Family');

const familyController = {

    findWhereActiveBoardForConnectedUser: async (req, res) => {
        if (req.session.user) {
            console.log(req.session.user.id)
            res.json(await Family.findWhereActiveBoardsByUser(req.session.user.id));
        } else {
            res.json('Veuillez vous connecter avant d\'accéder à votre jardin');
        }
    },

    insert: async (req,res) => {
        try {
            console.log("le req.body : ",req.body);
            console.log(" le req.file : ", req.file);
            //const photoObject = JSON.parse(req.body.photo);
            const family = new Family({
                name: req.body.name,
                picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                description: req.body.description
            });
            res.status(200).send(family);
            family.save();
        } catch (err) {
            res.status(500).send({
                message: `Could not upload the image: ${req.file}. ${err}`
            });
        }
    }
    
}

module.exports = familyController;