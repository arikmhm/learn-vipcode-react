import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="**********"
      />
      <Button variant="bg-blue-500 w-full mt-4">Login</Button>
    </form>
  );
};

export default FormLogin;
