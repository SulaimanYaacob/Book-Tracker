import { useState } from "react";
import { BookInfo } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../utils/useQuery";
import useSearchBooks from "../hooks/useSearchBooks";
import Loading from "../components/Loading";
import "../styles/BookSearch.css";

function BookSearch() {
  const navigate = useNavigate();
  const term = useQuery().get("term") || "";
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, books } = useSearchBooks({ searchTerm: term });

  const handleOnSearch = () => {
    navigate(`/search?term=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <div className="container-sm pb-3 px-0 w-75">
        <div className="input-group py-3">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Books"
            className="form-control bg-light"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleOnSearch()}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={handleOnSearch}
          >
            Search
          </button>
        </div>
        {term && (
          <p className="text-muted text-center">
            Searched for <mark>'{term}'</mark>
          </p>
        )}
        <Loading loading={loading}>
          <div className="book-card-container">
            {books?.map(({ id, volumeInfo }: BookInfo) => (
              <div key={id} className="book-card">
                <img
                  src={volumeInfo.imageLinks?.thumbnail}
                  className="book-card-img"
                  alt={volumeInfo.title}
                />
                <div className="book-card-body">
                  <Link to={`/book/${id}`} className="book-card-title">
                    {volumeInfo.title.length > 40
                      ? volumeInfo.title.substring(0, 40) + "..."
                      : volumeInfo.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Loading>
      </div>
    </>
  );
}

export default BookSearch;
