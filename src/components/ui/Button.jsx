const Button = ({
  type = "button",
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-medium text-white bg-custom-bg-button hover:bg-custom-h-button disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
