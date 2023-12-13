import { getAllUsers } from '@/services/user/getAllUsers';
import { createUser } from '@/services/user/createUser';

export default async function handler(req, res) {
    const messageID = process.env.MESSAGE_ID;

    if (req.method === 'GET') {
        const users = await getAllUsers();
        res.status(200).json({ users, message: messageID });
    } else if (req.method === 'POST') {
        const newUser = await createUser(req.body);
        res.status(200).json({ newUser, message: messageID });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed`, message: messageID });
    }

    // if (req.method === 'GET') {
    //     const users = await getAllUsers();
    //     res.status(200).json(users);
    // } else if (req.method === 'POST') {
    //     const newUser = await createUser(req.body);
    //     res.status(200).json(newUser);
    // } else {
    //     res.setHeader('Allow', ['GET', 'POST']);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}
