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

    async save() {

        if(this.id) {
            await db.query(`SELECT * FROM updateOperationType($1)`,[this]);
        } else {
            const insertedOperationType = await db.query(`SELECT * FROM newOperationType($1)`,[this]);
            if(insertedOperationType.rowCount) {
                this.id = insertedOperationType.rows[0].id;
            }
        }
    }

    async delete() {

        if(this.id) {
        await db.query(`DELETE FROM "operation_type" WHERE id=$1`,[this.id]);
        }
        else {
            this.errorMessage = "Impossible de supprimer un type d'opération inexistant";
        }
    }

}

module.exports = Operation_type;