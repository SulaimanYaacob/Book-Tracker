import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/search">Search Books</Link>
      <Link to="/clerk">Clerk</Link>
      <Link to="/profile">User Profile</Link>
      <Link to="/progress">Progress</Link>
    </div>
  );
}

export default Home;
