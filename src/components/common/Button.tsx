export default function Button({ className, label, loading, secondary, onClick, children }: Props) {

  const getClassNames = `
    button
    ${className}
    ${secondary ? "text-gray-800 underline-offset-2 decoration-2 hover:underline" : "text-white bg-red-500 hover:bg-red-600"}
    ${loading ? "loading" : ""}
    font-bold py-2 px-4 rounded
  `;

  return (
    <button className={getClassNames}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? 'Loading...' : children || label}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  label: '',
  loading: false,
  secondary: false,
  onClick: () => { },
  children: null,
}

type Props = {
  className?: string;
  label?: string;
  loading?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}