const db = require('../database');

class Board {

    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {

        const boards = await db.query(`SELECT * FROM "board";`);
        return boards.rows;
    }

    static async findAllByUser(id) {

        const boards = await db.query(`SELECT * from "board" WHERE user_id = $1`,[id]);
        return boards.rows;
    }

    static async findOneByUser(id,idBoard) {
        const board = await db.query(`SELECT * from "board" WHERE user_id = $1 and id = $2`,[id,idBoard]);
        return board.rows;
    }

    static async findByFamilyByUser(userId, familyId) {
        const boards = await db.query(`SELECT * FROM findBoardsByFamilyByUser($1, $2)`,[userId, familyId]);
        return boards.rows;
    }

    static async findAllEmptyBoardByUser(id) {

        const boardsEmpty = await db.query(`SELECT * FROM findActiveBoardByUser($1)`,[id]);
        return boardsEmpty.rows;
    }

    static async findOne(id) {

        const theBoard = await db.query(`SELECT * FROM "board" WHERE id = $1`,[id]);
        return theBoard.rows[0];
    }

    async save() {

        if(this.id) {
            await db.query(`SELECT * FROM updateBoard($1)`,[this]);
        } else {
            const insertedBoard = await db.query(`SELECT * FROM newBoard($1)`,[this]);
            if(insertedBoard.rowCount) {
                for (const prop in insertedBoard.rows[0]) {
                    this[prop] = insertedBoard.rows[0][prop];
                }
            }
        }
    }

    async delete(userid) {

        if(this.id) {
            const boardDelete = await db.query(`DELETE FROM "board" WHERE id=$1 and "user_id" = $2`,[this.id,userid]);
            return boardDelete;
            
        }
        else {
            this.errorMessage = "Impossible de supprimer une planche inexistante";
        }
    }

}

module.exports = Board;