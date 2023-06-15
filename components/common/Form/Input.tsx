import { ChangeEvent } from 'react';

interface IInputProps {
  id: string;
  name: string;
  label?: string;
  value: string;
  type: string;
  required: boolean;
  onChange?: (name: string, val: string) => void;
}

const Input = ({
  id,
  name,
  label,
  value,
  type,
  required,
  onChange,
}: IInputProps) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.name, e.target.value);
  };

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
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete="email"
          required={required}
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default Input;
