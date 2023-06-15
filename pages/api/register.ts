import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import z from 'zod';

import clientPromise from '../../lib/mongodb';
import { createJWT, hashPassword } from '../../lib/auth';
import { IUserAuth } from '../../interfaces/auth';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_BASE);

      const { email, password } = schema.parse(req.body);

      await db.collection('users').insertOne({
        email: email,
        password: await hashPassword(password),
      });

      const jwt = await createJWT({ email: email });

      res.setHeader(
        'Set-Cookie',
        serialize('token', jwt, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
      );

      res.status(200);
      res.json({ status: 'ok' });
    } else {
      res.status(400);
      res.end();
    }
  } catch (e) {
    res.status(500);
    res.end();
  }
};
