import { connectToDatabase } from '@/lib/db';

export async function getUser(userId) {
    const db = await connectToDatabase();
    
    const [users] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    await db.end();

    if (users.length === 0) {
        throw new Error('User not found');
    }

    return users[0];
}
