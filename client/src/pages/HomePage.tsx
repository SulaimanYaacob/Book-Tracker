import surrondedBySetbacks from "../assets/images/SurroundedBySetbacks.jpg";
import "../styles/HomePage.css";
import { useUser } from "@clerk/clerk-react";
import useGetMyBooksList from "../hooks/useGetMyBooksList";


function HomePage() {
  const { user } = useUser();
  const name = user?.firstName + " " + user?.lastName;
  const { listBooks } = useGetMyBooksList({ userId: user?.id });

  return (
    <div className="fluid-container">
      <div id="background"></div>
      <div id="hero">
        <div id="title">
          <span>Happy Reading,</span>
          <br />
          <span>{name}</span>
        </div>
        <div id="description">
          Don't let your love for books fade away! Rediscover the enhancement by
          tracking your favorite read. Let's keep the literacy going.
        </div>
        <div id="button">
          <span>Continue Reading</span>
          <span>
            <i className="gg-arrow-long-right"></i>
          </span>
        </div>
      </div>
      <div id="section1">
        <div id="title">My Books</div>
        <div id="book-list">
          {listBooks?.length > 0 ? (
            listBooks.map((book) => (
              <div
                className="book"
                style={{
                  backgroundImage: `url(${book.volumeInfo?.imageLinks?.thumbnail})`,
                }}
              ></div>
            ))
          ) : (
            <div>No books added yet!</div>)}
        </div>
        <div id="section2">
          <div id="current-read">
            <div
              id="cover"
              style={{ backgroundImage: `url(${surrondedBySetbacks})` }}
            ></div>
            <div id="description">
              <div id="title">
                Surrounded by Setbacks: Or, How to Succeed When Everything's Gone
                Bad
              </div>
              <div id="progress">
                <span>236</span>
                <span> /</span>
                <span>317</span> Pages
              </div>
              <div id="quotes">
                Success is not final, failure is not fatal, It is the courage to
                continue that counts.
              </div>
            </div>
          </div>
          <div id="current-read-details">
            <div id="book-details">
              <p>Status</p>
              <p>Author</p>
              <p>Genre</p>
              <p>Publisher</p>
              <p>Dates</p>
              <p>ISBN</p>
            </div>
            <div id="values">
              <p>Reading</p>
              <p id="author">Thomas Erikson</p>
              <p id="genre">Self-Help</p>
              <p id="publisher">Penguin Random House UK</p>
              <p id="dates">2021</p>
              <p id="ISBN">9781785043666</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
