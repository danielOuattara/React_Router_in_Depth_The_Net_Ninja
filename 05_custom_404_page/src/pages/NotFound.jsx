import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main>
        <h1> 404 : Page Not Found </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, illo
          ut mollitia commodi molestias doloribus delectus nisi ab placeat
          reprehenderit!
        </p>

        <p>
          <Link to="/">Go to home</Link>
        </p>
      </main>
    </>
  );
}
