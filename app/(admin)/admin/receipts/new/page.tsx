'use client';

import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

import ReceiptForm from '@/components/rest/ReceiptForm/ReceiptForm';
import { postReceipt } from '@/service/receipts.service';

export default async function AdminNewReceiptPage() {
  const router = useRouter();

  const handleFormSuccess = (res: FieldValues) => {
    postReceipt(res)
      .then(() => {
        router.push('/admin/receipts');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ReceiptForm onSuccess={handleFormSuccess} />
    </div>
  );
}
