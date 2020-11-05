const Photo = require('../models/Photo');
const fs = require('fs');

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
                url: `/images/${req.file.filename}`,
                board_id: parseInt(req.body.board_id)
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
    },

    update: async (req,res) => {
        try {
            const toUpdate = await Photo.findOne(req.params.id);
            if (!toUpdate) {
                throw new Error("Photo introuvable");
            }         
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");
            }
            const photo = new Photo(toUpdate);
            for(const prop in req.body) {
                if (typeof photo[prop] === "number") {
                    photo[prop] = parseInt(req.body[prop]);
                } else {
                    photo[prop] = req.body[prop];
                }  
            }
            if (req.file) {
                fs.unlink('public' + photo.url, function(err) {
                    if (err) throw err;
                    console.log('file deleted');
                });
                photo.url = `/images/${req.file.filename}`
            }
            await photo.save();
            if (!photo.id) {
                throw new Error("L'insertion a échoué");
            }
            res.json(photo);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }   
    }
    
}

module.exports = photoController;