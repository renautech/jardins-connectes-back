const db = require('../database');

class Operation_type {

    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {

        const types = await db.query(`SELECT * FROM "operation_type";`);
        return types.rows;
    }

}

module.exports = Operation_type;