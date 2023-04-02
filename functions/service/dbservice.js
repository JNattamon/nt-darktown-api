require('dotenv').config({ path: '../.env.development' });
const mysql = require('serverless-mysql')()

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     connectionLimit: process.env.DB_CONNECTION_LIMIT,
// })

class DBservice {
    async getConnection() {
        return mysql;
    }

    async connectDB(sql, values) {
        try {
            mysql.config({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                port: process.env.DB_PORT,
                connectionLimit: process.env.DB_CONNECTION_LIMIT,
            })
            await mysql.connect()
            let results = await mysql.query(sql, values)
            await mysql.end()
            return results
        } catch (err) {
            console.log(`connectDBerr: ${err}`);
        }
    }

    async closeTransaction() {
        console.log('close');
        await mysql.quit();
      }
}

module.exports = new DBservice();

