import { useParams } from "react-router-dom";
import useGetBookDetails from "../hooks/useGetBookDetails";
import Loading from "../components/Loading";
import "../styles/BookDetails.css";
import { useUser } from "@clerk/clerk-react";
import useAddBookToList from "../hooks/useAddBookToList";

function BookDetails() {
  const { id } = useParams();
  const { user } = useUser();
  const { book, loading } = useGetBookDetails({ id });
  const { isAddedToList, error, handleAddBookToList } = useAddBookToList({
    bookId: id,
    userId: user?.id,
  });

  return (
    <Loading loading={loading}>
      <div className="book-details-container">
        <div>
          <img
            className="book-image"
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            alt={book?.volumeInfo?.title}
          />
        </div>
        <div className="book-info">
          <h1 className="book-title">{book?.volumeInfo?.title}</h1>
          <p className="book-description">{book?.volumeInfo?.description}</p>
          <div className="book-details">
            <p className="book-info-item">
              <span className="book-info-label">Authors: </span>
              {book?.volumeInfo?.authors?.join(", ")}
            </p>
            <p className="book-info-item">
              <span className="book-info-label">Publisher: </span>
              {book?.volumeInfo?.publisher}
            </p>
            <p className="book-info-item">
              <span className="book-info-label">Published Date: </span>
              {book?.volumeInfo?.publishedDate}
            </p>
            <p className="book-info-item">
              <span className="book-info-label">Page Count: </span>
              {book?.volumeInfo?.pageCount}
            </p>
            <button
              className="add-to-list-button"
              onClick={handleAddBookToList}
              disabled={isAddedToList}
            >
              {isAddedToList ? "Added to List" : "Add to List"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default BookDetails;
