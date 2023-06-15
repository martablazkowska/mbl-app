import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import z from 'zod';

const schema = z.object({
  id: z.string().min(1),
});

import clientPromise from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_BASE);

    const { id } = schema.parse(req.query);

    const movie = await db.collection('receipts').findOne({
      _id: new ObjectId(id?.toString()),
    });

    res.json(movie);
  } catch (e) {
    res.status(500);
  }
};
