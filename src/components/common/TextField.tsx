import React from 'react';
import type { UseFormRegister, FieldValues } from 'react-hook-form';
import { toCamelCase } from 'src/utils/functions';

interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
}

export default function TextField({
  label,
  placeholder = '',
  required = false,
  register
}: Props) {
  return (
    <input
      className='shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      placeholder={placeholder || label}
      aria-label={label}
      {...register(toCamelCase(label), { required })}
    />
  );
}