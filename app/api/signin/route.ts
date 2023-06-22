import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import z from 'zod';

import clientPromise from '../../../lib/mongodb';
import { createJWT, comparePassword } from '../../../lib/auth';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_BASE);

      const { email } = schema.parse(req.body);

      const user = await db.collection('users').findOne({
        email: email,
      });

      const isUser = await comparePassword(req.body.password, user?.password);

      if (isUser) {
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
        res.status(401);
        res.json({ error: 'Wrong login' });
        res.end();
      }
    } else {
      res.status(400);
      res.end();
    }
  } catch (e) {
    res.status(500);
    res.end();
  }
};
