import { useState } from "react";
import { BookInfo } from "../types";
import useSearchBooks from "../hooks/useSearchBooks";
import { Link } from "react-router-dom";

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { books, fetchBooks } = useSearchBooks({ searchTerm });

  return (
    <div className="container-sm  border border-dark pb-3 px-0">
      <div className="text-center py-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchBooks}>Search</button>
      </div>
      <div className="row row-cols-1 row-cols-md-5 g-3 mx-3">
        {books?.map(({ id, volumeInfo }: BookInfo) => (
          <div key={id} className="col">
            <div className="card h-100">
              <img
                src={volumeInfo.imageLinks?.thumbnail}
                className="card-img-top img-fluid h-75"
                alt={volumeInfo.title}
              />
              <div className="card-body">
                <Link
                  to={`/book/${id}`}
                  className="card-title fs-5 fw-bold text-decoration-none"
                >
                  {volumeInfo.title.length > 40
                    ? volumeInfo.title.substring(0, 40) + "..."
                    : volumeInfo.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
