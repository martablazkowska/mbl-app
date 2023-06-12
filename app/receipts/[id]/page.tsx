import {
  fetchReceiptById,
  fetchReceipts,
} from '../../../service/receipts.service';

const ReceiptPage = async ({ params }: any) => {
  const data = await fetchReceiptById(params.id);

  return <h2>Receipt: {data.name}</h2>;
};

export async function generateStaticParams() {
  const receipts = await fetchReceipts().then((res) => {
    return res?.map((receipt: any) => {
      return { id: receipt._id };
    });
  });

  return receipts;
}

export default ReceiptPage;
