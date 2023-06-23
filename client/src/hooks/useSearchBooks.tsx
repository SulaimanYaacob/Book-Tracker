import axios from "axios";
import { useState } from "react";
import { BookInfo } from "../types";
import { useEffect } from "react";

type Props = {
  searchTerm: string;
};

export const useSearchBooks = ({ searchTerm }: Props) => {
  const [books, setBooks] = useState<BookInfo[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!searchTerm) {
      setBooks(undefined);
      return;
    }

    setLoading(true);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${
          import.meta.env.VITE_GOOGLE_KEY
        }&maxResults=40`
      )
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return {
    books,
    loading,
  };
};
