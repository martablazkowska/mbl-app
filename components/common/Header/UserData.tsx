import { cookies } from 'next/headers';

import { getUserFromCookie } from '@/lib/auth';

const getUserData = async () => await getUserFromCookie(cookies());

export default async function UserData() {
  const user = await getUserData();

  return <div className="text-white text-sm font-medium">{user?.email}</div>;
}
