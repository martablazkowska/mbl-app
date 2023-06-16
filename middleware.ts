import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_FILE = /\.(.*)$/;

export const validateJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.user;
};

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/login') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get('token');

  if (!jwt) {
    req.nextUrl.pathname = '/register';
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await validateJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    console.error(e);
    req.nextUrl.pathname = '/register';
    return NextResponse.redirect(req.nextUrl);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/receipts/:path*',
};
