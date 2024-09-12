import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";

const BookShop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container mx-auto my-10 md:my-[130px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <ShopCard key={book.id} book={book}></ShopCard>
        ))}
      </div>
    </div>
  );
};

export default BookShop;
