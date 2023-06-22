import Link from 'next/link';

import { fetchReceipts } from '@/service/receipts.service';

async function getData() {
  const receipts = await fetchReceipts();
  return receipts;
}

export default async function AdminReceiptsPage() {
  const { receipts } = await getData();

  return (
    <div>
      <h1 className="text-center py-4 text-3xl underline decoration-wavy tracking-widest text-gray-400 ">
        Receipts
      </h1>
      <div>
        <Link href={`/admin/receipts/new`}>Add new</Link>
      </div>
      <ul>
        {receipts &&
          receipts.map((receipt: any) => (
            <li key={receipt._id}>
              <Link href={`/admin/receipts/${receipt._id}`}>
                {receipt.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
