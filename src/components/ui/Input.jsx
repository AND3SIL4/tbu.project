const Input = ({ id, type, placeHolder, value, onInputChange }) => {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <input
      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      required
      id={id}
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
