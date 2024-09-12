import toast from "react-hot-toast";

const getStoredRedBooks = () => {
  const redBooks = localStorage.getItem("read-books");
  if (redBooks) {
    return JSON.parse(redBooks);
  }
  return [];
};

const saveRedBooks = (id) => {
  const storeReadBooks = getStoredRedBooks();
  const exists = storeReadBooks.find((bookId) => bookId === id);
  if (exists) {
    return toast.error("You have already read this book");
  }
  storeReadBooks.push(id);
  //   deleteWishlistBooks(id);
  saveWishlistBooks(id);
  localStorage.setItem("read-books", JSON.stringify(storeReadBooks));
  toast.success("Book added to read list");
};

const getWishlistBooks = () => {
  const wishlistBooks = localStorage.getItem("wishlist-books");
  if (wishlistBooks) {
    return JSON.parse(wishlistBooks);
  }
  return [];
};

const saveWishlistBooks = (id) => {
  const storeWishlistBooks = getWishlistBooks();
  const exists = storeWishlistBooks.find((bookId) => bookId === id);
  const crossCheck = getStoredRedBooks().find((bookId) => bookId === id);
  if (exists || crossCheck) {
    return toast.error("You have already added this book to your wishlist");
  }

  localStorage.setItem("wishlist-books", JSON.stringify(storeWishlistBooks));
  toast.success("Book added to wishlist");
};

const deleteWishlistBooks = (id) => {
  const storeWishlistBooks = getWishlistBooks();
  const index = storeWishlistBooks.indexOf(id);
  if (index > -1) {
    storeWishlistBooks.splice(index, 1);
    localStorage.setItem("wishlist-books", JSON.stringify(storeWishlistBooks));
  }
};

export {
  getStoredRedBooks,
  saveRedBooks,
  getWishlistBooks,
  saveWishlistBooks,
  deleteWishlistBooks,
};
