const User = require('../models/User');
const bcrypt = require('bcrypt');
const fs = require('fs');

const userController = {

    signup: async (req,res) => {
        try {
            const reqEmail = await User.findByEmail(req.body.email);
            if (reqEmail) {
                throw new Error("Cet email est déjà utilisé");
            }
            const reqNickname = await User.findByNickname(req.body.nickname);
            if (reqNickname) {
                throw new Error("Ce pseudo est déjà utilisé");
            }
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");;
            }
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(req.body.password,salt);
            req.body.password = encryptedPassword;
            const newUser = new User(req.body);
            if (req.file) {
                newUser.profile_picture = `/images/${req.file.filename}`
            } else {
                newUser.profile_picture = "";
            }
            await newUser.save();
            if (!newUser.id) {
                throw new Error("L'insertion a échoué");
            }
            req.session.user = newUser;
            delete req.session.user.password;
            res.json({
                message: "Inscrit et connecté",
                state: true
            });
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    signin: async (req,res) => {
        try {
            if (req.session.user) {
                throw new Error("Vous êtes déjà connecté");
            }
            const userAllowed = await User.findByEmail(req.body.email);
            if(!userAllowed) {
                throw new Error("Cet email n'existe pas");
            }
            const passwordValidation = await bcrypt.compare(req.body.password,userAllowed.password);
            if(!passwordValidation) {
                throw new Error("Mot de passe incorrect pour cette adresse email");
            }
            req.session.user = new User(userAllowed);
            delete req.session.user.password;
            res.json({
                message: "Connecté",
                state: true
            });
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }  
    },

    signout: (req, res) => {
        try {
            if (!req.session.user) { 
                throw new Error("Vous êtes déjà déconnecté");
            }
            req.session.destroy(err => {
                if (err) {
                    throw new Error("Impossible de se déconnecter");
                } 
                res.json({
                    message: "Déconnecté",
                    state: true
                });
            }); 
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }   
    },

    findConnected: async (req, res) => {
        try {
            const connectedUser = await User.findOne(req.session.user.id);
            if (!connectedUser) {
                throw new Error("Utilisateur introuvable");
            }
            delete connectedUser.password;
            res.json(connectedUser);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }    
    },

    deleteConnected: async (req, res) => {
        try {
            const userToDelete = new User(req.session.user);
            await userToDelete.delete();
            if (userToDelete.errorMessage) {
                throw new Error(userToDelete.errorMessage);
            }
            req.session.destroy(err => {
                if (err) {
                    throw new Error("Impossible de se déconnecter");
                } 
                res.json({
                    message: `Votre compte a bien été supprimé de notre base de données.`,
                    state: true
                });
            }); 
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    updateConnected: async (req, res) => {
        try {
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");;
            }
            const userToUpdate = await User.findOne(req.session.user.id);
            if (!userToUpdate) {
                throw new Error("Utilisateur introuvable");
            }
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                const encryptedPassword = await bcrypt.hash(req.body.password,salt);
                req.body.password = encryptedPassword;
            }
            const user = new User(userToUpdate);
            for(const prop in req.body) {
                if (typeof user[prop] === "number") {
                    user[prop] = parseInt(req.body[prop]);
                } else {
                    user[prop] = req.body[prop];
                }   
            }
            if (req.file) {
                fs.unlink('public' + user.profile_picture, function(err) {
                    if (err) throw err;
                    console.log('file deleted');
                });
                user.profile_picture = `/images/${req.file.filename}`
            }
            await user.save();
            delete user.password;
            res.json(user);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }  
    },

    deleteFromAdmin: async (req,res) => {

        const userToDelete = new User(req.session.user);
        if(req.session.role !== 'superAdmin') {
            await userToDelete.delete();
            req.session.destroy;
            res.json("Utilisateur supprimé !");
        }
        else {
            res.json("Vous ne pouvez pas supprimé un super Admin !");
        }
        

    }

};

module.exports = userController;