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

}

module.exports = Photo;