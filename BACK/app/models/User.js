const db = require('../database');


class Users {


    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {

        const allUser = await db.query(`SELECT * FROM "user";`);
        return allUser.rows;
    }

    static async findOne(id) {

        const oneUser = await db.query(`SELECT * FROM "user" WHERE id = $1`,[id]);
        return oneUser.rows[0];
    }

    async save() {

        if(this.id) {

            await db.query(`SELECT * FROM updateUser($1)`,[this]);
        } else {

            const insertedUser = await db.query(`SELECT * FROM newUser($1)`,[this]);
            if(insertedUser.rowCount) {
                this.id = insertedUser.rows[0].id;
            }

        }
    }


}

module.exports = Users;