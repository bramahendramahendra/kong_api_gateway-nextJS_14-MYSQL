import { deleteUser } from "@/services/user/deleteUser";
import { getUser } from "@/services/user/getUser";
import { updateUser } from "@/services/user/updateUser";

export default async function handler(req, res) {
    const { id } = req.query;

    const messageID = process.env.MESSAGE_ID; // Ambil MESSAGE_ID dari variabel lingkungan

    if (req.method === 'GET') {
        const user = await getUser(id);
        res.status(200).json({ user, message: messageID });
    } else if (req.method === 'PUT') {
        const updatedUser = await updateUser(id, req.body);
        res.status(200).json({ updatedUser, message: messageID });
    } else if (req.method === 'DELETE') {
        await deleteUser(id);
        res.status(200).json({ message: 'User deleted successfully', messageId: messageID });
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed`, message: messageID });
    }

    // if (req.method === 'GET') {
    //     const user = await getUser(id);
    //     res.status(200).json(user);
    // } else if (req.method === 'PUT') {
    //     const updatedUser = await updateUser(id, req.body);
    //     res.status(200).json(updatedUser);
    // } else if (req.method === 'DELETE') {
    //     await deleteUser(id);
    //     res.status(200).send('User deleted successfully');
    // } else {
    //     res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}
