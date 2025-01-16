import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="mt-4 text-gray-500 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
