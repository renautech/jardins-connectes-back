const db = require('../database');


class User {


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

    static async findByEmail(email) {

        const oneUser = await db.query(` SELECT * FROM "user" WHERE email = $1`,[email]);
        return oneUser.rows[0];
    }


    async save() {

        if(this.id) {

            await db.query(`SELECT * FROM updateUser($1)`,[this]);
        } else {

            let insertedUser;

            if(this.role){
                insertedUser = await db.query(`SELECT * FROM newUser($1)`,[this]);
            }
            else {
                insertedUser = await db.query(`SELECT * FROM newUserWithoutRole($1)`,[this]);
            }
            
            if(insertedUser.rowCount) {
                this.id = insertedUser.rows[0].id;
            }
            else {
                this.error = true;
            }

        }
    }

    async delete() {

        if(this.id) {
            await db.query(`DELETE FROM "user" WHERE id=$1`,[this.id]);
        }
        else {
            this.errorMessage = "Impossible de supprimer un utilisateur inexistant";
        }
    }


}

module.exports = User;