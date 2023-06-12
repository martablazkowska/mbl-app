import clientPromise from "../../../lib/mongodb";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res:NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_BASE);

        const movies = await db
            .collection("receipts")
            .find({})
            .sort({ name: -1 })
            .limit(20)
            .toArray();

        res.json(movies);
    } catch (e) {
        console.error(e);
    }
};