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

    static async findAllByBoard(id) {

        const operations = await db.query(`SELECT * from operation where board_id = $1 ORDER BY "date" DESC`,[id]);
        return operations.rows;
    }

    static async findByUserByFamily(userId, familyId) {

        const operations = await db.query(`SELECT * from operationByUserByFamily($1, $2);`, [userId, familyId]);
        return operations.rows;
    }

    static async findAllForUser(id) {

        const allOperations = await db.query(`SELECT operation.* from operation JOIN board on board.id = operation.board_id WHERE board.user_id = $1;`,[id]);
        return allOperations.rows;
    }

    static async findOne(id) {

        const oneOperations = await db.query(`SELECT * FROM operation WHERE id = $1`,[id]);
        return oneOperations.rows[0];
    }

    static async findOneByUser(operationId,userId) {

        const oneOperation = await db.query(`SELECT operation.* FROM operation JOIN board on board.id = operation.board_id WHERE operation.id = $1 and board.user_id = $2`, [operationId,userId]);
        return oneOperation.rows[0];
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
                for (const prop in insertedOperation.rows[0]) {
                    this[prop] = insertedOperation.rows[0][prop];
                }
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