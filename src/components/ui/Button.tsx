interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    const buttonClass = label === 'Save' 
      ? 'px-4 py-2 mt-3 bg-red-500 text-white rounded hover:bg-red-700 transition' 
      : 'px-4 py-2 mt-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition';
  
    return (
      <button onClick={onClick} className={buttonClass}>
        {label}
      </button>
    );
  };
  
  export default Button;
  
