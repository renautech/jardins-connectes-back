const isAuthentificate = async (req,res,next) => {
    try {
        if (!req.session.user) {
            throw new Error("Vous n'êtes pas connecté");
        }
        next();
    } catch (err) {
        res.json({
            message: err.message,
            state: false
        });
    }
}

const isAdmin = async (req,res,next) => {
    try {
        if (!req.session.user) {
            throw new Error("Vous n'êtes pas connecté");
        }
        if (req.session.user.role !== 'admin') {
            throw new Error("Vous n'avez pas l'accès (admin requis)");
        }
        next();
    } catch (err) {
        res.json({
            message: err.message,
            state: false
        });
    }
}

/*const isJardinier = async (req,res,next) => {
    if(req.session.user) {
        if(req.session.user.role === ('jardinier' || 'admin')) {
            next();
        }
        else {
            res.json("Vous n'avez pas accès à cette page");
        }
    }
    else {
        res.json("Vous n'êtes pas connecté");
    }
}*/

module.exports = { isAuthentificate, isAdmin};