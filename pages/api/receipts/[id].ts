import clientPromise from '../../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id) res.json({});

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_BASE);

    const movie = await db.collection('receipts').findOne({
      _id: new ObjectId(id?.toString()),
    });

    res.json(movie);
  } catch (e) {
    console.error(e);
  }
};
