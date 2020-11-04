const redis = require('redis');

const client = redis.createClient();

const buildKey = (url, params) => {
    return JSON.stringify({url, params});
}

const theKeys = [];

const cache = (request,response,next) => {
    const theKey = buildKey(request.originalUrl, request.params);
    
    theKeys.push(theKey);

    client.exists(theKey, (_,itExists) => {
        if (itExists) {
            client.get(theKey, (_, theResponse) => {
                response.json(JSON.parse(theResponse));    
            });
        }
        else {
            // on copie la méthode utilisée pour envoyer la réponse
            // ouais, on est comme ça

            // plus sérieusement, le fait de copier une fonction entraîne une perte du contexte
            // (si la fonction fait appel à this, il ne désignera plus rien)
            // c'est pour ça qu'on appelle bind derrière, qui permet de redéfinir le this de la fonction
            const sendJson = response.json.bind(response);
            response.json = (theResponse) => {
                client.setex(
                    theKey,
                    process.env.REDIS_EXPIRY || 5,
                    JSON.stringify(theResponse),
                    _ => sendJson(theResponse)
                );
            }
            next();
        }

    });
};

const flush = (request,response,next) => {

    client.del(theKeys, _ => {
        theKeys.length = 0;
        next();
    });
}

module.exports = {cache, flush};