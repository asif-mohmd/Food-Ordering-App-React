import { useRouteError } from "react-router-dom";

// useRouteError for showing the error message to UI

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Error Handled</h1>
      <h2>!oops something went wrong</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
