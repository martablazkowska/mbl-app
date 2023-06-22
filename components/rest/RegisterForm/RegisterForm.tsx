'use client';

import { FormEvent, useState } from 'react';

import Input from '@/components/common/Form/Input';

import { register } from '../../../service/auth.service';

interface IRegisterFormProps {
  onSuccess?: (res) => void;
  onError?: () => void;
}

const RegisterForm = ({ onSuccess, onError }: IRegisterFormProps) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    register(formState)
      .then((res) => {
        onSuccess && onSuccess(res);
      })
      .catch((err) => {
        onError && onError();
      });
  };

  return (
    <div className="m-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleFormSubmit}>
        <div>
          <Input
            id="email"
            name="email"
            label="Email address"
            value={formState.email}
            type="email"
            required
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            id="password"
            name="password"
            label="Password"
            value={formState.password}
            type="password"
            required
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
