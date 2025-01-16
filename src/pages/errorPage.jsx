import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs text-center justify-center">
        <h1 className="text-3xl font-bold mb-2 text-red-500">Oops!</h1>
        <p className="font-medium text-gray-500 mb-6">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="font-bold text-gray-500 mb-6 ">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
