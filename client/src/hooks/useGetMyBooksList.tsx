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

function useGetMyBooksList({ userId }: Props) {
    //const [listBookId, setListBookId] = useState<ListBookId[]>([]);
    const [listBooks, setListBooks] = useState<BookInfo[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/server/src/list_books.php/api/user/${userId}`)
          .then((response) => response.data)
          .catch((error) => console.log(error));
      }, [userId]);

    return { listBooks };
}

export default useGetMyBooksList;