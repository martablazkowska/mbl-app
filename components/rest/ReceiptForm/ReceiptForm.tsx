'use client';
import { FieldValues } from 'react-hook-form';

import Form from '@/components/common/Form/Form';
import { IFormElement } from '@/components/common/Form/Form.interface';

interface IReceiptFormProps {
  onSuccess: (res: FieldValues) => void;
}

const ReceiptForm = ({ onSuccess }: IReceiptFormProps) => {
  const handleFormSubmit = (data: FieldValues) => {
    onSuccess && onSuccess(data);
  };

  const fields: IFormElement[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'input',
      required: true,
    },
  ];

  return (
    <div className="my-10 mx-auto sm:max-w-sm">
      <h3 className="text-teal-800 uppercase">Add a new receipt</h3>
      <Form fields={fields} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ReceiptForm;
