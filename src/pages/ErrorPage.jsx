import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h2>There seems to be a problem here.</h2>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button
          className="btn btn--dark"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowUturnLeftIcon width={20} /> Go Back
        </button>
        <Link to="/" className="btn btn--dark">
          {" "}
          <HomeIcon width={20} /> <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
