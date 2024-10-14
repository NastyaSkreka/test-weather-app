interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "default" | "close" | "load";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  onClick,
  type = "default",
}) => {
  const buttonClass = (() => {
    const baseClasses = "px-4 py-2 mt-3 rounded transition";
    const disabledClasses = "opacity-50 cursor-not-allowed"; 

    switch (type) {
      case "close":
        return `${baseClasses} bg-red-500 text-white hover:bg-red-700 ${
          disabled ? disabledClasses : ""
        }`;
      case "load":
        return `${baseClasses} bg-green-500 text-white hover:bg-green-700 ${
          disabled ? disabledClasses : ""
        }`;
      default:
        return `${baseClasses} bg-blue-500 text-white hover:bg-blue-700 ${
          disabled ? disabledClasses : ""
        }`;
    }
  })();
  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
