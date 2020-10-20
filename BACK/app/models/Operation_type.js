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

    static async findOne(id) {

        const theType = await db.query(`SELECT * FROM "operation_type" WHERE id = $1`,[id]);
        return theType.rows[0];
    }

}

module.exports = Operation_type;