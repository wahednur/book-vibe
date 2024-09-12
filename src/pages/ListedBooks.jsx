import { useState } from "react";
// import { getStoredRedBooks, getWishlistBooks } from "../utility/localStorage";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const ListedBooks = () => {
  // const readBooks = getStoredRedBooks();
  // const wishListBooks = getWishlistBooks();
  const [tabIndex, setTabIndex] = useState(0);
  const navigation = useNavigation();
  return (
    <div className="mb-10 lg:mb-[130px]">
      <div className="flex items-center overflow-x-auto overflow-y-hidden bdr relative flex-nowrap  border-gray-400 container mx-auto z-10">
        <Link
          rel="noopener noreferrer"
          to="read-books"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-white" : "border-b"
          } border-gray-400 text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          rel="noopener noreferrer"
          to="wishlist-books"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
            tabIndex === 1 ? "border border-b-white" : "border-b"
          } rounded-t-lg border-gray-400`}
        >
          <span>Wishlist Books</span>
        </Link>
        {navigation.state === "loading" && <Loader />}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
