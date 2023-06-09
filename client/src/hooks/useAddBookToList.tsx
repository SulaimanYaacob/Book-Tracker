import axios from "axios";
import { useState } from "react";

type Props = {
  userId?: string;
  bookId?: string;
};

const useAddBookToList = ({ bookId, userId }: Props) => {
  //http://localhost:3000/server/src/books.php/api/books/add?bookId=${bookId}&userId=${userId} - if use extension
  const url = `http://localhost/book-tracker/server/src/books.php/api/books/add?bookId=${bookId}&userId=${userId}`;
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isAddedToList, setIsAddedToList] = useState<boolean>(false);

  const handleAddBookToList = async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await axios.post(url);
      const responseData = response.data;

      if (responseData === "Book already exists in the list")
        setError("Book already exists in your list");
      else setIsAddedToList(true);
    } catch (error) {
      console.log(error);
      setError("Error adding book to the list");
    } finally {
      setLoading(false);
    }
  };

  return { handleAddBookToList, error, loading, isAddedToList };
};

export default useAddBookToList;
