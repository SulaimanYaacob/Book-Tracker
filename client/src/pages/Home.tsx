import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="fluid-container">
      <div className="side-bar"></div>
      <div id='vertical-line'></div>
      <div className='content'></div>
      
      <div id='welcome-text'>
        <p>Happy reading,</p> 
        <p id='value'>amin haiqal</p>
        <p id='desc'>Don't let your love for books fade away! Rediscover the enhancement by tracking your favourite read. Let's keep the literacy going.</p>
      </div>
      <div id='book'>
        <img src='../src/assets/images/SurroundedBySetbacks.jpg' alt='book' />
      </div>
    </div>


    
  );
}

export default Home;
/*<div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/search">Search Books</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">User Profile</Link>
      <Link to="/progress">Progress</Link>
    </div>*/