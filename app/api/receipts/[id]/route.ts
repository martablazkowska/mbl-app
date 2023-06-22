import { ObjectId } from 'mongodb';
import z from 'zod';
import { NextResponse } from 'next/server';

import clientPromise from '../../../../lib/mongodb';

const schema = z.object({
  id: z.string().min(1),
});

export const GET = async (req: Request, context: { params: any }) => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_BASE);

    const { id } = schema.parse(context.params);

    const receipt = await db.collection('receipts').findOne({
      _id: new ObjectId(id?.toString()),
    });

    return NextResponse.json({
      message: 'ok',
      data: receipt,
    });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
