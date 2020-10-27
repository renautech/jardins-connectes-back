const Photo = require('../models/Photo');

const photoController = {

    insert: async (req,res) => {
        try {
            console.log("le req.body : ",req.body);
            console.log(" le req.file : ", req.file);
            //const photoObject = JSON.parse(req.body.photo);
            const photo = new Photo({
                size: req.file.size,
                url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                board_id: req.body.board_id
            });
            res.status(200).send(photo);
        } catch (err) {
            res.status(500).send({
                message: `Could not upload the image: ${req.file}. ${err}`
            });
        }
    }
}

module.exports = photoController;