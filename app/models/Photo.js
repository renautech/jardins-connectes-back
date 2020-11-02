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

    static async findOneByUser(photoId, userId) {

        const thePhoto = await db.query(`
            SELECT photo.*
            FROM photo
            JOIN board ON board.id = photo.board_id
            WHERE photo.id = $1 AND board.user_id = $2;
        `,[photoId, userId]);
        return thePhoto.rows[0];
    }

    static async findAllByUser(userId) {

        const photos = await db.query(`
            SELECT photo.*
            FROM photo
            JOIN board ON board.id = photo.board_id
            WHERE board.user_id = $1;
        `, [userId]);
        return photos.rows;
    }

    async save() {

        if(this.id) {
            const updatedPhoto = await db.query(`SELECT * FROM updatePhoto($1)`,[this]);
            if (updatedPhoto.rowCount) {
                this.date = updatedPhoto.rows[0].date;
            }
        } else {
            let insertedPhoto;
            if (this.date) {
                insertedPhoto = await db.query(`SELECT * FROM newPhoto($1)`,[this]);
            } else {
                insertedPhoto = await db.query(`SELECT * FROM newPhotoWithoutDate($1)`,[this]);
            }
            if(insertedPhoto.rowCount) {
                for (const prop in insertedPhoto.rows[0]) {
                    this[prop] = insertedPhoto.rows[0][prop];
                }
            }
        }
    }

    async delete() {

        if(this.id) {
            await db.query(`DELETE FROM "photo" WHERE id=$1`,[this.id]);
        }
        else {
            this.errorMessage = "Impossible de supprimer une photo inexistante";
        }
    }

}

module.exports = Photo;