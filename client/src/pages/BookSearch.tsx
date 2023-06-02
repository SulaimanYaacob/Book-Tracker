import { useState } from "react";
import { BookInfo } from "../types";
import useSearchBooks from "../hooks/useSearchBooks";

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { books, fetchBooks } = useSearchBooks({ searchTerm });

  return (
    <div>
      <input
        type="button"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="" onClick={fetchBooks}>
        Search
      </button>
      {books?.map(({ id, volumeInfo }: BookInfo) => (
        <div key={id}>{volumeInfo.title}</div>
      ))}
    </div>
  );
}

export default BookSearch;
