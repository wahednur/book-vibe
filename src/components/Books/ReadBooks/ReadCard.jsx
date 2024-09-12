import PropTypes from "prop-types";
import "./ReadCard.css";
import { Link } from "react-router-dom";
const ReadCard = ({ book }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 rd-card">
      <div className="w-full md:w-[230px]">
        <img src={book.image} alt="" />
      </div>
      <div className="read-card space-y-6">
        <h1>{book.name}</h1>
        <p>By: {book.author}</p>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <p className="flex gap-3 items-center">
            Tag :
            {book.tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </p>
          <p>Publishing Year : {book.year_of_publishing}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <p>Publisher : {book.publisher}</p>
          <p>Page: {book.total_pages}</p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <p>Category : {book.category}</p> <p>Rating : {book.rating}</p>{" "}
          <Link className="btn btn-green" to={`/books/${book.id}`}>
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

ReadCard.propTypes = {
  book: PropTypes.object,
};

export default ReadCard;
