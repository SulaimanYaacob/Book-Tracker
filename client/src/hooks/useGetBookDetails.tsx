import { useEffect, useState } from "react";
import { BookInfo } from "../types";
import axios from "axios";

type Props = {
  id?: string;
};

const useGetBookDetails = ({ id }: Props) => {
  const [book, setBook] = useState<BookInfo>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    book,
    loading,
  };
};

export default useGetBookDetails;
