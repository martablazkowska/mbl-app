import bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';

import { IUserAuth } from '../interfaces/auth';

// import clientPromise from './mongodb';

export const hashPassword = (password: string) => bcrypt.hash(password, 10);

export const comparePassword = (
  plainTextPassword: string,
  hashedPassword: string
) => bcrypt.compare(plainTextPassword, hashedPassword);

export const createJWT = (user: IUserAuth) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({
    user: {
      email: user.email,
    },
  })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

// export const validateJWT = async (jwt: string) => {
//   const { payload } = await jwtVerify(
//     jwt,
//     new TextEncoder().encode(process.env.JWT_SECRET)
//   );
//
//   return payload.user;
// };

// export const getUserFromCookie = async (cookies) => {
//   const client = await clientPromise;
//   const db = client.db(process.env.MONGODB_BASE);
//   const jwt = cookies.get('token');
//
//   const { email } = await validateJWT(jwt.value);
//
//   return await db.collection('users').findOne({
//     email: email as string,
//   });
// };
