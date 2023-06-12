import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="fluid-container">
      <div id='background'></div>
      <div id='vertical-line'></div>

      {/*Left Side Information*/}
      <div id='left-side'>
        <div className="side-bar"></div>
        <div id='vertical-line'></div>

        <div id='welcome-text'>
          <p>Happy reading,</p>
          <p id='value'>amin haiqal</p>
          <p id='desc'>Don't let your love for books fade away! Rediscover the enhancement by tracking your favourite read. Let's keep the literacy going.</p>
        </div>

        <div id="button" className="btn btn-dark d-flex align-items-center justify-content-center"><p>Continue Reading</p></div>

        <div id='book-list'>
          <div id='title'><p>My Books</p></div>
        </div>
      </div>

      {/*Right Side Information*/}
      <div id='book'>
        <div id='book-image'><img src='../src/assets/images/SurroundedBySetbacks.jpg' alt='book' /></div>
        <div id='book-description'>
          <div id='book-title'><p>Surrounded by Setbacks: Or, How to Succeed When Everything's Gone Bad</p></div>
          <div id='book-page'><p id='current-page'>236</p><p>/</p><p id='total-page'>317</p><p>pages</p></div>
          <div id='book-quote'>
            <p id='quote'>
              Success is not final, failure is not fatal, it is the courage to continue that counts. <br>
              </br><br></br>
              Winston Churchil.
            </p>
          </div>

        </div>
      </div>

      <div id='book-details'>
        <div id='parameter'>
          <p>Status</p>
          <p>Author</p>
          <p>Genre</p>
          <p>Publisher</p>
          <p>Dates</p>
          <p>ISBN</p>
        </div>

        <div id='value'>
          <p id='status'>Reading</p>
          <p id='author'>Thomas Erikson</p>
          <p id='genre'>Self-Help</p>
          <p id='publisher'>Penguin Random House UK</p>
          <p id='dates'>2021</p>
          <p id='ISBN'>9781785043666</p>
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