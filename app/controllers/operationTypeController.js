const OperationType = require('../models/Operation_type');

const operationTypeController = {

    insert: async (req,res) => {
        try {
            const reqOperationType = await OperationType.findByName(req.body.name);
            if (reqOperationType) {
                throw new Error("Ce type d'opération existe déjà");
            }
            if (req.file && req.file.filename.substring(req.file.filename.length - 9, req.file.filename.length) === 'undefined') {
                throw new Error("Seul les formats suivants sont acceptés: JPEG, JPG, PNG, SVG");;
            }
            const operationType = new OperationType({
                name: req.body.name,
                picture: '',
                description: req.body.description
            });
            if (req.file) {
                operationType.picture = `/images/${req.file.filename}`
            }
            await operationType.save();
            if (!operationType.id) {
                throw new Error("L'insertion a échoué");
            }
            res.json(operationType);
        } catch (err) {
            res.json({
                message: err.message,
                state: false
            });
        }
    }
    
};

module.exports = operationTypeController;