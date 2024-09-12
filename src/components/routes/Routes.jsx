import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import ListedBooks from "../../pages/ListedBooks";
import PageToRead from "../../pages/PageToRead";
import Shop from "../../pages/Shop";
import About from "../../pages/About";
import SingleBook from "../Books/Books/SingleBook/SingleBook";
import ReadBooks from "../Books/ReadBooks/ReadBooks";
import WishBooks from "../WishBooks/WishBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/listed-book",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            path: "read-books",
            loader: () => fetch("/public/books.json"),
            element: <ReadBooks />,
          },
          {
            path: "wishlist-books",
            loader: () => fetch("/public/books.json"),
            element: <WishBooks />,
          },
        ],
      },
      {
        path: "/read-page",
        loader: () => fetch("/public/books.json"),
        element: <PageToRead />,
      },

      {
        path: "/books/:id",
        loader: () => fetch("/public/books.json"),
        element: <SingleBook />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
