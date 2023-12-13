import { connectToDatabase } from '../../lib/db';

export async function createUser(userData) {
    const db = await connectToDatabase();

    const [result] = await db.query('INSERT INTO users SET ?', userData);
    await db.end();

    return { id: result.insertId, ...userData };
}
