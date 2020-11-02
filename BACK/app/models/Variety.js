const db = require('../database');

class Variety {

    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {
        const allVariety = await db.query(`SELECT * FROM variety`);
        return allVariety.rows;
    }

    static async findOne(id) {

        const oneVariety = await db.query(`SELECT * FROM variety WHERE id = $1`,[id]);
        return oneVariety.rows[0];
    }

    static async findAllByFamily(id) {

        const varieties = await db.query(`SELECT * FROM findVarietiesByFamily($1);`,[id]);
        return varieties.rows;
    }

    static async findByName(name) {

        const oneVariety = await db.query(`SELECT name FROM variety WHERE name = $1`,[name]);
        return oneVariety.rows[0];
    }

    async save() {

        if(this.id) {

            await db.query(`SELECT * FROM updateVariety($1)`,[this]);
        } else {

            const insertedVariety = await db.query(`SELECT * FROM newVariety($1)`,[this]);
            if(insertedVariety.rowCount) {
                for (const prop in insertedVariety.rows[0]) {
                    this[prop] = insertedVariety.rows[0][prop];
                }
            }

        }
    }

    async delete() {

        if(this.id) {
        await db.query(`DELETE FROM variety WHERE id=$1`,[this.id]);
        }
        else {
            this.errorMessage = "Impossible de supprimé une variété n'existant pas";
        }
    }

}

module.exports = Variety;