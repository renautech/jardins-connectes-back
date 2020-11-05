const Variety = require('../models/Variety');
const fs = require('fs');

const varietyController = {

    allVarietiesByFamily: async (req,res) => {
        try {
            const varieties = await Variety.findAllByFamily(req.params.id);
            res.json(varieties);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    insert: async (req,res) => {
        try {
            const reqVariety = await Variety.findByName(req.body.name);
            if (reqVariety && reqVariety.name !== 'Autre') {
                throw new Error("Cette variété existe déjà");
            }
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");;
            }
            const variety = new Variety({
                name: req.body.name,
                picture: '',
                description: req.body.description,
                family_id: parseInt(req.body.family_id)
            });
            if (req.file) {
                variety.picture = `/images/${req.file.filename}`
            }
            await variety.save();
            if (!variety.id) {
                throw new Error("L'insertion a échoué");
            }
            res.json(variety);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    update: async (req,res) => {
        try {
            const toUpdate = await Variety.findOne(req.params.id);
            if (!toUpdate) {
                throw new Error("Variété introuvable");
            }         
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");
            }
            const variety = new Variety(toUpdate);
            for(const prop in req.body) {
                if (typeof variety[prop] === "number") {
                    variety[prop] = parseInt(req.body[prop]);
                } else {
                    variety[prop] = req.body[prop];
                }  
            }
            if (req.file) {
                fs.unlink('public' + variety.picture, function(err) {
                    if (err) throw err;
                    console.log('file deleted');
                });
                variety.picture = `/images/${req.file.filename}`
            }
            await variety.save();
            if (!variety.id) {
                throw new Error("L'insertion a échoué");
            }
            res.json(variety);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }   
    }
    
};

module.exports = varietyController;