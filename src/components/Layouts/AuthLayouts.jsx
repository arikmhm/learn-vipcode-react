/* eslint-disable react/prop-types */

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-gray-500 mb-6">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
