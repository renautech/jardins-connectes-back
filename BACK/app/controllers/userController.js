const User = require('../models/User');
const bcrypt = require('bcrypt');

const userController = {

    signup: async (req,res) => {

        // récupérer les infos de la requête, si les infos sont bien unique et conforme
        const emailrequired = await User.findByEmail(req.body.email);
        if (emailrequired) {
            res.json({
                message: "Cet email est déjà utilisé",
                state: false
            });
        } else {   // alors les insérer en BDD et rediriger vers la page connexion
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(req.body.password,salt);
            req.body.password = encryptedPassword;
            const newUser = new User(req.body);
            await newUser.save();
            if(!newUser.error) {
                const theUser = new User(await User.findOne(newUser.id));
                req.session.user = theUser;
                delete req.session.user.password;
                res.json({
                    message: "Inscrit et connecté",
                    state: true
                });
            }
        }
    },

    signin: async (req,res) => {

        const userAllowed = await User.findByEmail(req.body.email);
        if(userAllowed) {
            const passwordValidation = await bcrypt.compare(req.body.password,userAllowed.password);
            if(passwordValidation) {
                req.session.user = new User(userAllowed);
                delete req.session.user.password;
                res.json({
                    message: "Connecté",
                    state: true
                });
            } else {
                res.json({
                    message: "Mot de passe incorrect pour cette adresse email",
                    state: false
                });    
            }       
        } else {
            res.json({
                message: "Cet email n'existe pas",
                state: false
            });
        }
    },

    signout: (req, res) => {
        if (req.session.user) {
            req.session.destroy(err => {
                if (err) {
                    res.json({
                        message: "Impossible de se déconnecter",
                        state: false
                    });
                } else {
                    res.json({
                        message: "Déconnecté",
                        state: true
                    });
                }
            });  
        } else {
            res.json({
                message: "Vous êtes déjà déconnecté",
                state: false
            });
        }
        
    },

    findConnected: async (req, res) => {
        if (req.session.user) {
            const connectedUser = await User.findOne(req.session.user.id);
            delete connectedUser.password;
            res.json(connectedUser);
        } else {
            res.json({
                message: "Veuillez vous connecter",
                state: false
            });
        }    
    },

    deleteConnected: async (req, res) => {
        if (req.session.user) {
            const userToDelete = new User(req.session.user);
            await userToDelete.delete();
            if (userToDelete.errorMessage) {
                res.json({
                    message: userToDelete.errorMessage,
                    state: false
                });
            } else {
                req.session.destroy(err => {
                    if (err) {
                        res.json({
                            message: "Impossible de se déconnecter",
                            state: false
                        });
                    } else {
                        res.json({
                            message: `Votre compte a bien été supprimé de notre base de données.`,
                            state: true
                        });
                    }
                });                      
            }
        } else {
            res.json({
                message: "Veuillez vous connecter",
                state: false
            });
        }   
    },

    updateConnected: async (req, res) => {
        if (req.session.user) {
            const userToUpdate = new User(await User.findOne(req.session.user.id));
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                const encryptedPassword = await bcrypt.hash(req.body.password,salt);
                req.body.password = encryptedPassword;
            }
            for(const prop in req.body) {
                userToUpdate[prop] = req.body[prop];     
            }
            await userToUpdate.save();
            delete userToUpdate.password;
            res.json(userToUpdate);
        } else {
            res.json({
                message: "Veuillez vous connecter",
                state: false
            });
        }  
    }

};


module.exports = userController;