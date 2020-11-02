const Photo = require('../models/Photo');

const photoController = {

    insert: async (req,res) => {
        try {
            if (!req.file) {
                throw new Error("L'insertion de la photo a échoué");
            }
            if (req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");
            }
            const photo = new Photo({
                url: `/${req.file.filename}`,
                board_id: req.body.board_id
            });
            await photo.save();
            res.json(photo);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    findOneForUserConnected: async (req,res) => {
        try {
            const photo = await Photo.findOneByUser(req.params.id, req.session.user.id);
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