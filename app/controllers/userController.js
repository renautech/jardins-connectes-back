const User = require('../models/User');
const bcrypt = require('bcrypt');
const fs = require('fs');
const nodemailer = require("nodemailer");
require('dotenv').config();
const sendEmail = require('../services/sendEmail');

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
            let userContent = req.body;
            // Token creation for email validation
            let rand=Math.floor((Math.random() * 100)*((Math.random()+100) * 100) + 54);
            // Add token to the new user data
            userContent.token = rand;
            const newUser = new User(userContent);
            // save users in DB
            await newUser.save();
            if (!newUser.id) {
                throw new Error("L'insertion a échoué");
            }
            
            sendEmail(newUser, rand);
            
            // if (req.file) {
            //     newUser.profile_picture = `/images/${req.file.filename}`
            // } else {
            //     newUser.profile_picture = "";
            // }
            res.json({
                message: "Un email vous a été envoyé. Veuillez cliquer sur le lien dans cet email pour valider votre inscription",
            });
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    },

    validateEmail: async (req, res) => {
        try {
            const userToValidate = await User.findOne(req.params.id);
            if(userToValidate.token == req.params.token) {
                // change validate column of user to true
                // create a new User object 'user' from userToValidate which is a simple object
                const user = new User(userToValidate);
                console.log(user)
                user["active"] = true;
                // token is deleted, so the link sent by email works only one time for security
                user["token"] = undefined;
                console.log(user)
                await user.save();
                res.json({
                    message: `User approved. Id : ${req.params.id} Token : ${req.params.token}`,
                });
            } else {
                res.json({
                    message: `User NOT approved. Email verification failed. Id : ${req.params.id} Token : ${req.params.token}`,
                }); 
            };
            
        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    },

    signin: async (req,res) => {
        try {
            const userAllowed = await User.findByEmail(req.body.email);
            if(!userAllowed) {
                throw new Error("Cet email n'existe pas");
            }
            const passwordValidation = await bcrypt.compare(req.body.password,userAllowed.password);
            if(!passwordValidation) {
                throw new Error("Mot de passe incorrect pour cette adresse email");
            }
            // user authorized to log in only if his account has been validated by email : 'active' property should be true
            if(!userAllowed.active)
            {
                throw new Error("Email non approuvé. Veuillez cliquer sur lien reçu par email afin de valider votre compte.");
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
                throw new Error("Seuls les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");;
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
            res.json("Vous ne pouvez pas supprimer un super Admin !");
        }
        

    }

};

module.exports = userController;