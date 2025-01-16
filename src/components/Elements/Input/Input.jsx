/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="w-full text-sm border rounded-md px-4 py-2 text-gray-700 placeholder:opacity-70"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
