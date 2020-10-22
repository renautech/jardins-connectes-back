const User = require('../models/User');
const bcrypt = require('bcrypt');

const userController = {

    signup: async (req,res) => {

        // récupérer les infos de la requête, si les infos sont bien unique et conforme
        const emailrequired = await User.findByEmail(req.body.email);
        if (emailrequired) {
            res.json("cet adresse email est déja lié à un compte existant");
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
                res.json("Inscrit et connecté");
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
                res.json("Connecté");
            } else {
                res.json("Mauvaise combinaison email/password");    
            }       
        } else {
            res.json("l'email n'existe pas !");
        }
    },

    signout: (req, res) => {
        req.session.user = false;
        res.json("Déconnecté");
    }

};


module.exports = userController;