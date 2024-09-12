import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlistBooks } from "../../utility/localStorage";
import ReadCard from "../Books/ReadBooks/ReadCard";

const WishBooks = () => {
  const [wishlist, setWishlist] = useState([]);
  const loadWhishBook = useLoaderData();
  useEffect(() => {
    const storedBooksIds = getWishlistBooks();
    const wishlistBook = [];
    for (const id of storedBooksIds) {
      const book = loadWhishBook.find((book) => book.id === id);
      if (book) {
        wishlistBook.push(book);
      }
    }
    setWishlist(wishlistBook);
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6">
      {wishlist.map((book) => (
        <ReadCard key={book.id} book={book}></ReadCard>
      ))}
    </div>
  );
};

export default WishBooks;
