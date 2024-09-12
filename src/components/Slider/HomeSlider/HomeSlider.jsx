import { Link } from "react-router-dom";
import "./HomeSlider.css";
const HomeSlider = () => {
  return (
    <div className="container mx-auto slider-root px-8 lg:px-[120px] py-8 lg:py-[80px] mt-10">
      <div className="w-full flex flex-col md:flex-row justify-center items-center slider">
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-[56px] font-bold font-playfair">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listed-book/read-books" className="btn btn-green">
            View The List
          </Link>
        </div>
        <div>
          <img src="/public/dating.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
