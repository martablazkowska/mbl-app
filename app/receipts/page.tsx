import Link from 'next/link';
import { fetchReceipts } from '../../service/receipts.service';

async function getData() {
  const receipts = await fetchReceipts();
  return receipts;
}

export default async function ReceiptsPage() {
  const receipts = await getData();

  return (
    <div>
      <h1>Receipts</h1>
      <ul>
        {receipts.map((receipt: any) => (
          <li key={receipt._id}>
            <Link href={`/receipts/${receipt._id}`}>{receipt.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
