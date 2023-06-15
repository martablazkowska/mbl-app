'use client';

import { useRouter } from 'next/navigation';

import RegisterForm from '@/components/rest/RegisterForm/RegisterForm';

export default function Page() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/');
  };

  return (
    <div>
      <RegisterForm onSuccess={handleSuccess} />
    </div>
  );
}
