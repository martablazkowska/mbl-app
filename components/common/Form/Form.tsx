import { ComponentProps } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import Input from '@/components/common/Form/Input';
import { IFormElement } from '@/components/common/Form/Form.interface';

interface IFormProps {
  fields: IFormElement[];
  onSubmit: (data: FieldValues) => void;
}

const Form = ({ fields, onSubmit }: IFormProps) => {
  const hookForm = useForm();
  const { handleSubmit } = hookForm;

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => {
          return (
            <Input
              key={`FORM_FIELD_${field.id}`}
              field={field}
              hookForm={hookForm}
            />
          );
        })}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
