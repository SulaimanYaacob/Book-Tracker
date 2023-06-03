import { useState } from "react";
import { BookInfo } from "../types";
import useSearchBooks from "../hooks/useSearchBooks";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../utils/useQuery";

function BookSearch() {
  //Use parameters to get searchTerm from url
  const term = useQuery().get("term") || "";
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, books } = useSearchBooks({ searchTerm: term });
  const navigate = useNavigate();

  const handleOnSearch = () => {
    navigate(`/search?term=${searchTerm}`);
    setSearchTerm("");
  };

  //Todo Make loading Screen
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container-sm  pb-3 px-0">
      <div className="text-center py-3">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleOnSearch()}
        />
        <button onClick={handleOnSearch}>Search</button>
      </div>
      <div className="row row-cols-2 row-cols-md-5 g-3 mx-3">
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
    </div>
  );
}

export default BookSearch;
