import axios from "axios";
import { useContext, useState } from "react";
import BookCard2 from "./BookCard-2";
import ListCard from "./ListCard";
import { IoGrid } from "react-icons/io5";
import { FaThList, FaFilter } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [showAvailable, setShowAvailable] = useState(true);
  const [showBooks, setShowBooks] = useState([]);
  const { userData } = useContext(AuthContext);


  useState(() => {
    axios
      .get("https://readopia-server-one.vercel.app/books", { withCredentials: true })
      .then((res) => {
        setAllBooks(res.data);
        setShowBooks(res.data);
      })
      .catch((error) => {
        error.message;
      });
  }, []);

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };

  const toggleShow = () => {
    setShowAvailable((prevState) => !prevState);
    if (showAvailable) {
      const filteredItems = allBooks.filter((book) => book.quantity > 0);
      setShowBooks(filteredItems);
    } else {
      setShowBooks(allBooks);
    }
  };

  return (
    <div className="min-h-[calc(100vh-240)]">
      <h1 className="text-center text-3xl font-bold">All Books</h1>
      <div className=" flex justify-between items-center ">
        <button
          className="flex justify-center items-center gap-2 btn-ghost p-2 rounded-full"
          onClick={toggleShow}
        >
          <FaFilter />
          {showAvailable ? <h1>Show Available</h1> : <h1>Show All</h1>}
        </button>

        <div className="flex">
          <h1 className="mx-2 font-bold">View||</h1>
          <button onClick={toggleView}>
            {isGridView ? (
              <FaThList className="w-7 h-7 drop-shadow-lg" />
            ) : (
              <IoGrid className="w-7 h-7 drop-shadow-lg" />
            )}
          </button>
        </div>
      </div>
      <div className="my-10">
        {isGridView ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 m-5">
            {showBooks.map((book) => (
              <BookCard2
                key={book._id}
                book={book}
                userData={userData}
              ></BookCard2>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {showBooks.map((book) => (
                <ListCard
                  key={book._id}
                  book={book}
                  userData={userData}
                ></ListCard>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
