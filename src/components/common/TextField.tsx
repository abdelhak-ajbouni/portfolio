

import { toCamelCase } from 'src/libs/functions';

export default function TextField({ label, placeholder, required, register }: Props) {
  return <input
    className='shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    label={label}
    placeholder={placeholder || label}
    aria-label={label}
    {...register(toCamelCase(label), { required })}
  />;
}

TextField.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
  register: () => { },
}

type Props = {
  label: string;
  placeholder?: string;
  required?: boolean;
  register: any;
}