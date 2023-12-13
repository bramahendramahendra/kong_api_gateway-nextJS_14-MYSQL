import { connectToDatabase } from '../../lib/db';

export async function updateUser(userId, updateData) {
    const db = await connectToDatabase();
    
    const [result] = await db.query('UPDATE users SET ? WHERE id = ?', [updateData, userId]);
    await db.end();

    if (result.affectedRows === 0) {
        throw new Error('User not found');
    }

    return result;
}
