import axios from "axios";
import { useState } from "react";
import BookCard2 from "./BookCard-2";
import ListCard from "./ListCard";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useState(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setAllBooks(res.data);
      })
      .catch((error) => {
        error.message;
      });
  }, []);

  const [isGridView, setIsGridView] = useState(true);
  const [showAvailable, setShowAvailable]= useState(true)

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };
  const toggleShow = () => {
    setShowAvailable((prevState) => !prevState);
    const available = allBooks.filter(book=>{book.quantiy <= 10})
    console.log(available)
  };

  console.log(showAvailable)

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl font-bold">All Books</h1>
      <div className=" flex justify-between items-center bg-red-200">
      <button onClick={toggleShow}>
          {showAvailable ? (
             <h1>Show All</h1>
          ) : (
            <h1>Show available</h1>
          )}
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
      {isGridView ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
          {allBooks.map((book) => (
            <BookCard2 key={book._id} book={book}></BookCard2>
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
            {allBooks.map((book) => (
              <ListCard key={book._id} book={book}></ListCard>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
