import { SERVER } from '../constants/Server';

export const fetchReceipts = async () => {
  const res = await fetch(`${SERVER}/api/receipts`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const fetchReceiptById = async (id: string) => {
  const res = await fetch(`${SERVER}/api/receipts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
