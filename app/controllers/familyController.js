const Family = require('../models/Family');
const fs = require('fs');


const familyController = {

    findWhereActiveBoardForConnectedUser: async (req, res) => {
        try {
            res.json(await Family.findWhereActiveBoardsByUser(req.session.user.id));
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }  
    },

    insert: async (req,res) => {
        try {
            const reqFamily = await Family.findByName(req.body.name);
            if (reqFamily) {
                throw new Error("Cette famille existe déjà");
            }
            if (!req.file) {
                throw new Error("L'insertion de la photo a échouée");
            }
            if (req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");;
            }
            const family = new Family({
                name: req.body.name,
                picture: `/images/${req.file.filename}`,
                description: req.body.description || ''
            });
            await family.save();
            if (!family.id) {
                throw new Error("L'insertion a échoué");
            }
            res.json(family);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }   
    },

    update: async (req,res) => {
        try {
            const toUpdate = await Family.findOne(req.params.id);
            if (!toUpdate) {
                throw new Error("Famille introuvable");
            }         
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");
            }
            const family = new Family(toUpdate);
            for(const prop in req.body) {
                family[prop] = req.body[prop];
            }
            if (req.file) {
                if(family.picture!='') {
                    fs.unlink('public' + family.picture, function(err) {
                        if (err) throw err;
                        console.log('file deleted');
                    });
                }
                family.picture = `/images/${req.file.filename}`
            }
            await family.save();
            if (!family.id) {
                throw new Error("L'insertion a échoué");
            }
            res.json(family);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }   
    }   
}

module.exports = familyController;