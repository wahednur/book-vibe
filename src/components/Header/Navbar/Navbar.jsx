import { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-book/read-books">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/read-page">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-100">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
          <div className="flex items-center justify-between">
            <button>
              <div className="flex items-center space-x-2">
                <Link
                  to="/"
                  className="text-black dark:text-c-black font-bold text-2xl"
                >
                  Book Vibe
                </Link>
              </div>
            </button>
            <div className={`${open ? "block" : "hidden"} lg:block`}>
              <ul className="mbl-nav flex flex-col lg:flex-row text-base font-bold text-c-black ">
                {navList}
              </ul>
            </div>
            <div className="hidden lg:flex lg:items-center gap-x-2">
              <button className="flex items-center bg-tia rounded-md text-white justify-center px-6 py-2.5 font-semibold">
                Sign up
              </button>
              <button className="flex items-center justify-center rounded-md bg-sky text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                Login
              </button>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="focus:outline-none text-slate-200 dark:text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-2xl text-c-black focus:outline-none hover:text-tia active:scale-110 active:text-tia"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
