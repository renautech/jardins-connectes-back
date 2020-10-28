const isAuthentificate = async (req,res,next) => {
    if (req.session.user) {
        next();
    } else {
        res.json("Vous n'êtes pas connecté");
    }
}

const isAdmin = async (req,res,next) => {
    if(req.session.user) {
        if (req.session.user.role === 'admin') {
            next();
        }
        else {
            res.json("Vous n'avez pas l'accès (admin requis)");
        }
    }
    else {
        res.json("Vous n'êtes pas connecté !");
    }
    
}

const isJardinier = async (req,res,next) => {
    if(req.session.user.role === ('jardinier' || 'admin')) {
        next();
    }
    else {
        res.json("Vous n'avez pas accès à cette page");
    }
}

module.exports = {isAuthentificate,isAdmin,isJardinier};