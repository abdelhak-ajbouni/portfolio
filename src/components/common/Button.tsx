import type { ReactNode } from 'react'

type Props = {
  className?: string;
  label?: string;
  type?: "submit" | "button" | "reset" | undefined;
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export default function Button({ className, label, type, loading, disabled, secondary, onClick, children }: Props) {

  const getClassNames = `
    button
    ${className}
    ${secondary ? "text-gray-800 underline-offset-2 decoration-2 hover:underline" : "text-white bg-red-500 hover:bg-red-600"}
    ${loading ? "loading" : ""}
    font-bold py-2 px-4 rounded
  `;

  return (
    <button
      className={getClassNames}
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? 'Loading...' : children || label}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  label: '',
  type: 'submit',
  loading: false,
  disabled: false,
  secondary: false,
  onClick: () => { },
  children: null,
}

