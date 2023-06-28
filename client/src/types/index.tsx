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

export type BookDetails = {
  volumeInfo: any;
  id: string;
  title: string;
  status: string;
  author: string;
  genre: string;
  imageLink: string;
  pageCount: number;
  totalPageCount: number;
  publisher: string;
  publishedDate: string;
  isbn: string;
  quote: string;
  timestamp: Date;
}
