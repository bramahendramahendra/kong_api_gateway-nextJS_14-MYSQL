import { createUser } from '../../../services/user/createUser';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const newUser = await createUser(req.body);
        res.status(200).json(newUser);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
