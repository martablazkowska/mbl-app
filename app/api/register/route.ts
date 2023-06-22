import z from 'zod';
import { NextResponse } from 'next/server';

import clientPromise from '../../../lib/mongodb';
import { createJWT, hashPassword } from '../../../lib/auth';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const POST = async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_BASE);

    const { email, password } = schema.parse(await req.json());

    await db.collection('users').insertOne({
      email: email,
      password: await hashPassword(password),
    });

    const jwt = await createJWT({ email: email });

    // res.setHeader(
    //   'Set-Cookie',
    //   serialize('token', jwt, {
    //     httpOnly: true,
    //     path: '/',
    //     maxAge: 60 * 60 * 24 * 7,
    //   })
    // );

    return NextResponse.json({ message: 'ok', token: jwt });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err });
  }
};
