import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import ListedBooks from "../../pages/ListedBooks";
import PageToRead from "../../pages/PageToRead";
import Shop from "../../pages/Shop";
import About from "../../pages/About";
import SingleBook from "../Books/Books/SingleBook/SingleBook";

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
      },
      {
        path: "/read-page",
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
