/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-gray-500 mb-6">
          Welcome, Please enter your details
        </p>
        {children}
        {/* <p className="mt-4 text-gray-500 text-center">
          {type === "login"
            ? "Don&apos;t have an account?"
            : "Already have an account?"}{" "}
          {type === "login" && (
            <Link to="/register" className="text-blue-500 font-semibold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          )}
        </p> */}
        <AuthNavigation type={type} />
      </div>
    </div>
  );
};

// Opsi untuk conditional rendering
const AuthNavigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-4 text-gray-500 text-center">
        {" "}
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-blue-500 font-semibold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-4 text-gray-500 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
