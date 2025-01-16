import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-4 text-gray-500 text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-blue-500 font-semibold">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
