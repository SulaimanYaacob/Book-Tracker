import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

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

      <div id="button" className="btn btn-dark d-flex align-items-center justify-content-center"><p>Continue Reading</p></div>

      {/* Task Today: 12 June 2023 */}
      <div id='book'>
        <div id='book-image'><img src='../src/assets/images/SurroundedBySetbacks.jpg' alt='book' /></div>
        <div id='book-details'>
          <div id='book-title'><p>Surrounded by Setbacks: Or, How to Succeed When Everything's Gone Bad</p></div>
          <div id='book-page'><p id='current-page'>236</p><p>/</p><p id='total-page'>317</p><p>pages</p></div>
        </div>
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