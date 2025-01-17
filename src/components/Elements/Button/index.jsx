/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children, variant = "bg-blue-500" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white `}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
