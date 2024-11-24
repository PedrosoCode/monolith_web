import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/contact">
        <h2>contato</h2>
      </Link>
    </>
  );
};

export default Home;
