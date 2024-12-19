const Label = ({ labelName, labelFor }) => {
  return (
    <label
      htmlFor={labelFor}
      className="text-custom-gray font-bold cursor-pointer"
    >
      {labelName}
    </label>
  );
};

export default Label;
