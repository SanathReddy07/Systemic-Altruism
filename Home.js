import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Connecting People Across Faiths & Interests</h1>
      <p className="mt-4">Connecting people of all faiths through events and community support.</p>
      <Link to="/events" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded">
        Explore Events
      </Link>
    </div>
  );
};

export default Home;
