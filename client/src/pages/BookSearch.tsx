import { useState } from "react";
import { BookInfo } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../utils/useQuery";
import useSearchBooks from "../hooks/useSearchBooks";
import Loading from "../components/Loading";
import AppLayout from "../components/AppLayout";

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
      <div className="container-sm  pb-3 px-0 w-75">
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
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3 mx-3">
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
                      className="card-title  fw-bold text-decoration-none"
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
        </Loading>
      </div>
    </>
  );
}

export default BookSearch;
