import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Aos from "aos";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  Aos.init();
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);

  //   const userEmail = user.email;
  console.log(user.email);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowed/${user.email}`)
      .then((res) => {
        setBorrowed(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleReturn = (book_id, id) => {
    console.log(id);
    const qty = "1";
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:5000/books/${book_id}`, { qty })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        axios
          .delete(`http://localhost:5000/borrowed/${id}`)
          .then((response) => {
            console.log("Delete operation successful", response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

         const updatedBooks = borrowed.filter(books=>books._id !== id)
          setBorrowed(updatedBooks)


        Swal.fire({
          title: "Returned!",
          text: "Books has been returned.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-260px)]">
      <h1 className="text-3xl text-center font-bold my-10">My Borroes</h1>
      <div>
        {borrowed.map((borrowedBook) => (
          <div key={borrowedBook._id}>
            <div
              data-aos="flip-down"
              className="my-5 shadow-xl flex justify-between w-2/3 mx-auto border-2 rounded-xl p-5 items-center pr-24"
            >
              <img
                className="w-24"
                src={borrowedBook.url}
                alt={borrowedBook.name}
              />
              <h1 className="font-bold text-xl">{borrowedBook.name}</h1>
              <h1>Category: {borrowedBook.category}</h1>
              <h1>Issued date: {borrowedBook.issuedOn}</h1>
              <h1 className="">
                Return date: {borrowedBook.returnOn || "Undefined"}
              </h1>
              <button
                onClick={() =>
                  handleReturn(borrowedBook.book_id, borrowedBook._id)
                }
                className="btn"
              >
                Return
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
