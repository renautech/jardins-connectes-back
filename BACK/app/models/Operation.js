const db = require('../database');


class Operation {


    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {

        const allOperations = await db.query(`SELECT * FROM operation;`);
        return allOperations.rows;
    }

    static async findOne(id) {

        const oneOperations = await db.query(`SELECT * FROM operation WHERE id = $1`,[id]);
        return oneOperations.rows[0];
    }

    async save() {

        if(this.id) {

            const updateSuccess = await db.query(`SELECT * FROM updateOperation($1)`,[this]);
            if(updateSuccess.rowCount)
            this.date = updateSuccess.rows[0].date;
        } else {
            let insertedOperation;
            if(this.date){
                insertedOperation = await db.query(`SELECT * FROM newOperation($1)`,[this]);
            } else {
                insertedOperation = await db.query(`SELECT * FROM newOperationWithoutDate($1)`,[this]);
            }
            if(insertedOperation.rowCount) {
                this.id = insertedOperation.rows[0].id;
                this.date = insertedOperation.rows[0].date;
            }
        }
    }

    async delete() {

        if(this.id) {
        await db.query(`DELETE FROM operation WHERE id=$1`,[this.id]);
        }
        else {
            this.errorMessage = "Impossible de supprimé une opération n'existant pas";
        }
    }


}

module.exports = Operation;