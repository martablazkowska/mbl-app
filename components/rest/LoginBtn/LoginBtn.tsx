'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

const LoginBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex gap-3 text-white text-sm items-center">
        <span className="align-middle">{session.user?.email} </span>
        <button
          className="rounded-md bg-teal-800 text-teal-50 p-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-3 text-white text-sm items-center">
      <button
        className="rounded-md bg-teal-800 text-teal-50 p-2"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginBtn;
