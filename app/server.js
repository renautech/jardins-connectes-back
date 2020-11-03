require('dotenv').config();
const express= require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const { sanitize } = require('./services/sanitizer');

// il ne sauvegarde que l’ID session dans le cookie lui-même, mais pas les données de session (à la différence de cookie-session ou express.session (fourni de base))
//Par défaut, il utilise le stockage en mémoire et n’est pas conçu pour un environnement de production. En production, on devra configurer un magasin de sessions évolutif
const session = require('express-session');

const port = process.env.PORT || 5555;
const host = process.env.HOST || "localhost";

// https://www.npmjs.com/package/helmet
//app.use(helmet());

// authorize the access of API
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use(express.static(path.join(__dirname, '/../public')));

app.use(express.json());

// on ne donne pas de nom de session dans l'objet de config car : L’utilisation d’un nom de cookie de session par défaut risque d’ouvrir votre application aux attaques. Le problème de sécurité qui en découle est similaire à X-Powered-By : une personne potentiellement malveillante peut l’utiliser pour s’identifier auprès du serveur et cibler ses attaques en conséquence.
// Pour éviter ce problème, on utilisera des noms de cookie génériques
app.use(session({
    secret: 'c un mystere jesuis sur que tu trouveraspashaha hihi hoho hilarant pas vrai hein',
    name: 'sessionId',
    resave: true, // compliqué, mais si on utilise pas 'touch' faut mettre true
    // on ajoute des options de sécurité
    saveUninitialized: true, // Default value
    cookie: {
        secure: false,       // Garantit que le navigateur n’envoie le cookie que sur HTTPS.
        httpOnly: true, // Garantit que le cookie n’est envoyé que sur HTTP(S), pas au JavaScript du client, ce qui renforce la protection contre les attaques de type cross-site scripting.
        // domain - Indique le domaine du cookie ; utilisez cette option pour une comparaison avec le domaine du serveur dans lequel l’URL est demandée. S’ils correspondent, vérifiez ensuite l’attribut de chemin.
        // path - Indique le chemin du cookie ; utilisez cette option pour une comparaison avec le chemin demandé. Si le chemin et le domaine correspondent, envoyez le cookie dans la demande.
        expires: new Date(Date.now() + 1000*60*60*24*30) // 30 days
    }
}));

// sanitize the HTML sent to the app
app.use(sanitize);

app.use('/v1', router);

app.launch = () => {
    app.listen(port, () => {
        console.log(`Listening on http://${host}:${port}`);
    });
}

module.exports = app;