import "../styles/HomePage.css";
import { useUser } from "@clerk/clerk-react";
import useGetMyBooksList from "../hooks/useGetMyBooksList";

function HomePage() {
  const { user } = useUser();
  const { listBooks } = useGetMyBooksList({ userId: user?.id });
  const name = (user?.firstName ?? "") + " " + (user?.lastName ?? "");

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
                key={book.id}
                id="cover"
                style={{ backgroundImage: `url(${book.imageLink})` }}
              >
                <div id="name">{book.title}</div>
              </div>
            ))
          ) : (
            <div>No books added yet!</div>
          )}
        </div>

        <div id="section2">
          <div id="current-read">
            {listBooks?.length > 0 ? (
              listBooks.map((book) => (
                <div key={listBooks[0].id}>
                  <div>
                    <div
                      id="cover"
                      style={{
                        backgroundImage: `url(${listBooks[0].imageLink})`,
                      }}
                    ></div>
                    <div id="description">
                      <div id="title">{listBooks[0].title}</div>
                      <div id="progress">
                        <span>{listBooks[0].pageCount}</span>
                        <span> /</span>
                        <span>{listBooks[0].totalPageCount} pages</span>
                      </div>
                      <div id="quotes">
                        <p>{listBooks[0].quote}</p>
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
                      <p>{listBooks[0].status}</p>
                      <p>{listBooks[0].author}</p>
                      <p>{listBooks[0].genre}</p>
                      <p>{listBooks[0].publisher}</p>
                      <p>{listBooks[0].publishedDate}</p>
                      <p>{listBooks[0].isbn}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No books added yet!</div>
            )}
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
