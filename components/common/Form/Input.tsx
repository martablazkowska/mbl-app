import { UseFormReturn } from 'react-hook-form';

import { IFormElement } from '@/components/common/Form/Form.interface';

interface IInputProps {
  field: IFormElement;
  hookForm: UseFormReturn;
}

const Input = ({ field, hookForm }: IInputProps) => {
  const { register } = hookForm;
  const { id, label } = field;

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          id={field.id}
          required={field?.required || false}
          {...register(field.id, { ...field })}
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
