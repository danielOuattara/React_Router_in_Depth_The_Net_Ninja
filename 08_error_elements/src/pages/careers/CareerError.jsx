import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function CareerError() {
  const error = useRouteError();
  console.log("error = ", error);
  return (
    <div className="careers-error">
      <h2> 404 : Page Not Found </h2>
      <p>{error.message}</p>
      <Link to="/"> Go Back to Home Page</Link>
    </div>
  );
}
