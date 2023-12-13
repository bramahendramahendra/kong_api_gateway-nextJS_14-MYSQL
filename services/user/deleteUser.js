import { connectToDatabase } from '@/lib/db';

export async function deleteUser(userId) {
    const db = await connectToDatabase();

    const [result] = await db.query('DELETE FROM users WHERE id = ?', [userId]);
    await db.end();

    if (result.affectedRows === 0) {
        throw new Error('User not found');
    }
}
