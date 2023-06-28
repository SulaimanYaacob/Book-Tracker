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
                key={book.id}
                id="cover"
                style={{ backgroundImage: `url(${book.image})` }}
              >
                <div id="name">{book.title}</div>
              </div>
            ))
          ) : (
            <div>No books added yet!</div>)}
        </div>


        <div id="section2">
          <div id="current-read">
            {listBooks?.length > 0 ? (listBooks.map((book) => (
              <div key={book.id}>
                <div>
                  <div id="cover" style={{ backgroundImage: `url(${book.image})` }}></div>
                  <div id="description">
                    <div id="title">{book.title}</div>
                    <div id="progress">
                      <span>{book.pageCount}</span>
                      <span> /</span>
                      <span>{book.totalPageCount} pages</span>
                    </div>
                    <div id="quotes">
                      <p>{book.quote}</p>
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
                    <p>{book.status}</p>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    <p>{book.publisher}</p>
                    <p>{book.publishedDate}</p>
                    <p>{book.isbn}</p>
                  </div>
                </div>
              </div>           
            ))) : (<div>No books added yet!</div>)}
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
