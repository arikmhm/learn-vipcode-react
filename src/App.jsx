/* eslint-disable react/prop-types */
function App() {
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
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-4">
        <Button variant="bg-blue-500"> Login </Button>
        <Button variant="bg-gray-500"> Register </Button>
        <Button></Button>
      </div>
    </>
  );
}

export default App;
