import { connectToDatabase } from '@/lib/db';

export async function getAllUsers() {
    const db = await connectToDatabase();

    const [users] = await db.query('SELECT * FROM users');
    await db.end();

    return users;
}