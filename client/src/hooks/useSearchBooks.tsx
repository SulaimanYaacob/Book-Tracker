import axios from "axios";
import { useState } from "react";
import { BookInfo } from "../types";

type Props = {
  searchTerm: string;
};

const useSearchBooks = ({ searchTerm }: Props) => {
  const [books, setBooks] = useState<BookInfo[]>();

  async function fetchBooks() {
    if (!searchTerm) return setBooks(undefined);
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${
        import.meta.env.VITE_GOOGLE_KEY
      }&maxResults=40`
    );

    setBooks(response.data.items);
  }

  return {
    books,
    fetchBooks,
  };
};

export default useSearchBooks;
