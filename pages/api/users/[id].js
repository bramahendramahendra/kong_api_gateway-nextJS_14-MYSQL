import { getUser } from "@/services/user/getUser";

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        const user = await getUser(id);
        res.status(200).json(user);
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
