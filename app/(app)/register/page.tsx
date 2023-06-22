'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import RegisterForm from '@/components/rest/RegisterForm/RegisterForm';

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSuccess = (response) => {
    console.log(response);
    // Cookies.set('token', response.token);
    router.push('/');
  };

  console.log(session);

  return (
    <div>
      <RegisterForm onSuccess={handleSuccess} />
    </div>
  );
}
