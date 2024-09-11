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
  localStorage.setItem("read-books", JSON.stringify(storeReadBooks));
  toast.success("Book added to read list");
};

export { getStoredRedBooks, saveRedBooks };
