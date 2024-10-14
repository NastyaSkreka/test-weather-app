interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'default' | 'save' | 'load'; 
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick, type = 'default' }) => {
  const buttonClass = (() => {
    switch (type) {
      case 'save':
        return 'px-4 py-2 mt-3 bg-red-500 text-white rounded hover:bg-red-700 transition';
      case 'load':
        return 'px-4 py-2 mt-3 bg-green-500 text-white rounded hover:bg-green-700 transition'; 
      default:
        return 'px-4 py-2 mt-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition'; 
    }
  })();

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

  
