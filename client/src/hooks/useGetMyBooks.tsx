import axios from "axios";
import { useState, useEffect } from "react";
import { BookInfo } from "../types";

type Props = {
  userId?: string;
};

interface ListBookId {
  id: string;
  bookId: string;
  userId: string;
}

function useGetMyBooks({ userId }: Props) {
  const [listBookId, setListBookId] = useState<ListBookId[]>([]);
  const [listBooks, setListBooks] = useState<BookInfo[]>([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost/book-tracker/server/src/books.php/api/books/${userId}`
      )
      .then((response) => setListBookId(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    if (!listBookId) {
      setListBooks([]);
      return;
    }

    const promises = listBookId.map((book) =>
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${book.bookId}`)
        .then((res) => res.data)
    );

    Promise.all(promises).then((res) => setListBooks(res));
  }, [listBookId]);

  return { listBooks };
}

export default useGetMyBooks;
