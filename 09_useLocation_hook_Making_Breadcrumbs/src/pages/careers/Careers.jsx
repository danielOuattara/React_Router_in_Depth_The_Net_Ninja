import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={`${career.id}`} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");
  if (!response.ok) {
    throw new Error("Could not fetch the careers");
  }
  return response.json();
};

// json-server -p 4000 ./data/db.json
