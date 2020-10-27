require('dotenv').config();
const db = require('../database');
const datas = require('../../data/jardins.json');
//const datas = require('../../data/operation_type.json');

(async () => {

    // Delete all values in tables
    // We are reversing the keys of the json file in order to delete the data's tables without violate the foreign keys constraints
    const table = Object.keys(datas);
    const reversedTables = table.reverse();
    for (const table of reversedTables) {
        await db.query(`DELETE FROM "${table}";`);
        // Refresh the id_sequence of the table (which continue to increase if it's not resfreshed)
        await db.query(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 1;`);
    }

    // Insert all datas includes in the json to the db
    for (const table in datas) {
        for (const element of datas[table]) {
            const valuesSql = [];
            const propsSql = [];
            const valuesProp = [];
            let index = 1;
            for (const prop in element) {
                valuesProp.push(element[prop]);
                valuesSql.push(`$${index}`);
                propsSql.push(prop);
                index++;
            }
            await db.query(`
                INSERT INTO "${table}" (${propsSql.join(', ')}) VALUES (${valuesSql.join(', ')});
            `, valuesProp);
        }
    }
})();

