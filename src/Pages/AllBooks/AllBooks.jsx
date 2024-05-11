import axios from "axios";
import { useState } from "react";
import BookCard2 from "./BookCard-2";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useState(() => {
    axios.get('http://localhost:5000/books')
    .then(res=>{setAllBooks(res.data)})
    .catch(error=>{console.log(error.message)})

  }, []);

  console.log(allBooks)

  return (
  <div>
    <h1 className="text-center text-3xl font-bold">All Books</h1>
    <div  className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
        {
            allBooks.map(book=> <BookCard2 key={book._id} book={book}></BookCard2>)
        }
    </div>

  </div>
)
};

export default AllBooks;
