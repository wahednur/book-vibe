import { useLoaderData, useParams } from "react-router-dom";
import "./SigleBook.css";
const SingleBook = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const inId = parseInt(id);
  const book = books.find((book) => book.id === inId);
  const {
    name,
    author,
    image,
    review,
    total_pages,
    rating,
    category,
    tags,
    publisher,
    year_of_publishing,
    price,
  } = book;

  return (
    <div className="container mx-auto my-[100px]">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-1/2">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h4>By: {author}</h4>
          <hr className="my-6" />
          <h4>{category}</h4>
          <hr className="my-6" />
          <p>
            <strong>Review:</strong> {review}
          </p>
          <p className="flex gap-3 mt-5">
            Tag:
            {tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </p>
          <hr className="my-6" />
          <div className="grid grid-cols-2 gap-3 intro">
            <p>Number of Pages: </p>
            <strong>{total_pages}</strong>
            <p>Publisher:</p> <strong>{publisher}</strong>
            <p>Year of Publishing:</p> <strong>{year_of_publishing}</strong>
            <p>Rating:</p> <strong>{rating}</strong>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-sky">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
