import React from 'react';
import type { UseFormRegister, FieldValues } from 'react-hook-form';
import { toCamelCase } from 'src/utils/functions';

interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  register: UseFormRegister<FieldValues>;
}

export default function TextArea({
  label,
  placeholder = '',
  required = false,
  rows = 1,
  register
}: Props) {
  return (
    <textarea
      className='shadow appearance-none border rounded w-full mb-2 p-3 bg-gray-300 text-sm md:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      placeholder={placeholder || label}
      aria-label={label}
      rows={rows}
      {...register(toCamelCase(label), { required })}
    />
  );
}