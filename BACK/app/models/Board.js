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

    static async findOne(id) {

        const theBoard = await db.query(`SELECT * FROM "board" WHERE id = $1`,[id]);
        return theBoard.rows[0];
    }

}

module.exports = Board;