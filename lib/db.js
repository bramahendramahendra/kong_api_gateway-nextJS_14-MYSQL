import mysql from 'mysql2/promise';

export async function connectToDatabase() {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kong_db'
    });
    return db;
}
