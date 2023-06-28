import axios from "axios";
import { useState, useEffect } from "react";
import { BookDetails } from "../types";

type Props = {
    userId?: string;
  };

function useGetMyBooksList({ userId }: Props) {
    //const [listBookId, setListBookId] = useState<ListBookId[]>([]);
    const [listBooks, setListBooks] = useState<BookDetails[]>([]);

    useEffect(() => {
      axios.get(`http://localhost:3000/server/src/books.php/api/books/read/${userId}`)
          .then((response) => setListBooks(response.data))
          .catch((error) => console.log(error));
  }, [userId]);

    return { listBooks };
}

export default useGetMyBooksList;