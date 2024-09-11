import PropTypes from "prop-types";
import "./BookCard.css";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
const BookCard = ({ book }) => {
  const { id, name, author, image, tags, category, rating } = book;
  return (
    <Link to={`/books/${id}`}>
      <div className="book-card">
        <div className="book-image">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="book-info mt-6">
          <div className="tags">
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="">
            <h1 className="title">{name}</h1>
            <p className="author">By {author}</p>
          </div>
          <hr className="hr" />
          <div className="flex justify-between cat-rat">
            <p>{category}</p>
            <p className="flex items-center gap-2">
              {rating} <FaRegStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
