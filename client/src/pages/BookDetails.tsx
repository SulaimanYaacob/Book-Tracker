import { useParams } from "react-router-dom";
import useGetBookDetails from "../hooks/useGetBookDetails";
import Loading from "../components/Loading";
import { useState } from "react";
import "../styles/BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const { book, loading } = useGetBookDetails({ id });
  const [isAddedToList, setIsAddedToList] = useState(false);

  const handleAddToList = () => {
    // Logic to add the book to the list
    setIsAddedToList(true);
  };

  return (
    <Loading loading={loading}>
      <div className="book-details-container">
        <div className="book-image-container">
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
              <span className="book-info-label">Authors:</span>
              {book?.volumeInfo?.authors?.join(", ")}
            </p>
            <p className="book-info-item">
              <span className="book-info-label">Publisher:</span>
              {book?.volumeInfo?.publisher}
            </p>
            <p className="book-info-item">
              <span className="book-info-label">Published Date:</span>
              {book?.volumeInfo?.publishedDate}
            </p>
            <p className="book-info-item">
              <span className="book-info-label">Page Count:</span>
              {book?.volumeInfo?.pageCount}
            </p>
            <button
              className="add-to-list-button"
              onClick={handleAddToList}
              disabled={isAddedToList}
            >
              {isAddedToList ? "Added to List" : "Add to List"}
            </button>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default BookDetails;
