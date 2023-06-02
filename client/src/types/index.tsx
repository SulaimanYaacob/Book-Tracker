export type BookInfo = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    authors: string[];
    categories: string[];
    publisher: string;
    publishedDate: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
};
