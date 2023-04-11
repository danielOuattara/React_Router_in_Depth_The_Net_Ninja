import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
        necessitatibus iusto libero optio architecto mollitia autem error.
        Maxime quae quas accusantium mollitia delectus error, eius tenetur
        voluptatibus, pariatur quo doloribus!
      </p>
    </div>
  );
}

export const singleCareerLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:4000/careers/${params.careerId}`,
  );
  if (!response.ok) {
    throw new Error("Not Found");
  }
  return response.json();
};
