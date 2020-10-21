const db = require('../database');

class Families {

    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {
        const allFamily = await db.query(`SELECT * FROM family`);
        return allFamily.rows;
    }

    static async findOne(id) {

        const oneFamily = await db.query(`SELECT * FROM family WHERE id = $1`,[id]);
        return oneFamily.rows[0];
    }

    async save() {

        if(this.id) {

            await db.query(`SELECT * FROM updateFamily($1)`,[this]);
        } else {

            const insertedFamily = await db.query(`SELECT * FROM newFamily($1)`,[this]);
            if(insertedFamily.rowCount) {
                this.id = insertedFamily.rows[0].id;
            }

        }
    }

    async delete() {

        if(this.id) {
        await db.query(`DELETE FROM family WHERE id=$1`,[this.id]);
        }
        else {
            this.errorMessage = "Impossible de supprimé une famille n'existant pas";
        }
    }


}

module.exports = Families;
