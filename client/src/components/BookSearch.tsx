import React, { useState } from "react";
import axios from "axios";
import useSearchBooks from "../hooks/useSearchBooks";
import { BookInfo } from "../types";

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { books, fetchBooks } = useSearchBooks({ searchTerm });

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={fetchBooks}>Search</button>
      {books?.map(({ id, volumeInfo }: BookInfo) => (
        <div key={id}>{volumeInfo.title}</div>
      ))}
    </div>
  );
}

export default BookSearch;
