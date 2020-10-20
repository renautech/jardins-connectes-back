const db = require('../database');

class Photo {

    constructor(data) {
        for(const prop in data) {
            this[prop] = data[prop]; 
        }
    }

    static async findAll() {

        const photos = await db.query(`SELECT * FROM "photo";`);
        return photos.rows;
    }

    static async findOne(id) {

        const thePhoto = await db.query(`SELECT * FROM "photo" WHERE id = $1`,[id]);
        return thePhoto.rows[0];
    }

    async save() {

        if(this.id) {
            // UPDATE
        } else {
            const insertedPhoto = await db.query(`SELECT * FROM newPhoto($1)`,[this]);
            if(insertedPhoto.rowCount) {
                this.id = insertedPhoto.rows[0].id;
                this.date = insertedPhoto.rows[0].date;
            }
        }
    }

}

module.exports = Photo;