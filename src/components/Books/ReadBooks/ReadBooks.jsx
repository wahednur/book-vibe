import { useEffect, useState } from "react";
import { getStoredRedBooks } from "../../../utility/localStorage";
import ReadCard from "./ReadCard";
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const loadBook = useLoaderData();
  useEffect(() => {
    const storedBooksIds = getStoredRedBooks();
    const readBook = [];

    for (const id of storedBooksIds) {
      const book = loadBook.find((book) => book.id === id);
      if (book) {
        readBook.push(book);
      }
    }
    setReadBooks(readBook);
  }, []);
  return (
    <div className="flex flex-col gap-6 container mx-auto mb-10 md:mb[130px] mt-6">
      {readBooks.map((book) => (
        <ReadCard key={book.id} book={book}></ReadCard>
      ))}
    </div>
  );
};

export default ReadBooks;
