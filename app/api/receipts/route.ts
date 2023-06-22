import { NextResponse } from 'next/server';

import clientPromise from '../../../lib/mongodb';

export const GET = async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_BASE);

    const receipts = await db
      .collection('receipts')
      .find({})
      .sort({ name: -1 })
      .limit(20)
      .toArray();

    // res.json({ message: 'ok' });
    return NextResponse.json({ message: 'ok', receipts });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err });
  }
};
