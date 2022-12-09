import { toCamelCase } from 'src/libs/functions';

export default function TextArea({ label, placeholder, required, rows, register }: Props) {
  return <textarea
    className='shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    label={label}
    placeholder={placeholder || label}
    aria-label={label}
    rows={rows}
    {...register(toCamelCase(label), { required })}
  />;
}

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
  rows: 1,
  register: () => { },
}

type Props = {
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  register: any;
}