import { getStoredRedBooks, getWishlistBooks } from "../utility/localStorage";

const ListedBooks = () => {
  const readBooks = getStoredRedBooks();
  const wishListBooks = getWishlistBooks();
  return (
    <div>
      <h1 className="text-3xl">From ListedBooks page {wishListBooks.length}</h1>
    </div>
  );
};

export default ListedBooks;
