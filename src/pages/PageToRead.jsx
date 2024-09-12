import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { getStoredRedBooks } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
  const [readBooks, setReadBooks] = useState([]);
  const loadBook = useLoaderData();
  useEffect(() => {
    const storedBooksIds = getStoredRedBooks();
    const readBook = [];

    for (const id of storedBooksIds) {
      const book = loadBook.find((book) => book.id === id);
      if (book) {
        readBook.push(book);
      }
    }
    setReadBooks(readBook);
    console.log(readBooks.length);
  }, []);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  return (
    <div className="container mx-auto">
      <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
      <BarChart
        className="w-full aspect-square"
        width={800}
        height={500}
        data={readBooks}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey={(book) => book.total_pages}
          fill="#0085F6"
          barSize={30}
          shape={<TriangleBar />}
        >
          {readBooks.map((book, idx) => (
            <Cell key={`cell-${idx}`} fill={colors[idx % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageToRead;
