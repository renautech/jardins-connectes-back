const Photo = require('../models/Photo');

const photoController = {

    insert: async (req,res) => {
        try {
            if (!req.files) {
                throw new Error("L'insertion de la photo a échoué");
            }
            const photo = new Photo({
                size: req.file.size,
                url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                board_id: req.body.board_id
            });
            await photo.save();
            res.json({
                message: "Photo enregistrée !",
                state: true
            });
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    findOneForUserConnected: async (req,res) => {
        try {
            if (!req.session.user) { 
                throw new Error("Veuillez vous connecter");
            }
            const photo = await Photo.findOneByUser(req.session.user.id);
            if (!photo) {
                throw new Error("Photo introuvable");
            }
            res.json(photo);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    findAllForUserConnected: async (req,res) => {
        try {
            if (!req.session.user) { 
                throw new Error("Veuillez vous connecter");
            }
            const photos = await Photo.findAllByUser(req.session.user.id);
            if (!photos) {
                throw new Error("Photos introuvables");
            }
            res.json(photos);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    }
    
}

module.exports = photoController;