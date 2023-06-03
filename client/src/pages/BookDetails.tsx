import { Params, useParams } from "react-router-dom";
import useGetBookDetails from "../hooks/useGetBookDetails";

const BookDetails = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const { book, loading } = useGetBookDetails({ id });

  //TODO Implement Loading
  return (
    <div className="container py-3">
      <div className="row g-4">
        <div className="col-md-4 align-self-start text-center">
          <img
            className="h-100 w-100"
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            alt={book?.volumeInfo?.title}
          />
        </div>

        <div className="col-md-8">
          <h1>{book?.volumeInfo?.title}</h1>
          <p>{book?.volumeInfo?.description}</p>
          <p>{book?.volumeInfo?.authors}</p>
          <p>{book?.volumeInfo?.publisher}</p>
          <p>{book?.volumeInfo?.publishedDate}</p>
          <p>{book?.volumeInfo?.pageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
